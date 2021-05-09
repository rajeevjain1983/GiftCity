// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Modal } from 'react-native';
import BodyCopy from '@tcp/core/src/components/common/atoms/BodyCopy';
import { getScreenHeight } from '../../../../../utils/index.native';
import withStyles from '../../../hoc/withStyles.native';
import {
  DropDownStyle,
  Row,
  HeaderContainer,
  DropDownItemContainer,
  Separator,
  FlatList,
  StyledLabel,
  SelectedLabelView,
  HeaderItemContainer,
  FlatListWrapper,
  TouchableOpacityWrapper,
  OverLayView,
} from '../DropDown.style.native';

const downIcon = require('../../../../../../../mobileapp/src/assets/images/carrot-small-down.png');
const upIcon = require('../../../../../../../mobileapp/src/assets/images/carrot-small-up.png');

/**
 * This is a drop down component. Styling of drop down and its item
 * can be passed in the component.
 * @param dropDownStyle - It applies style to the drop down row.
 * @param itemStyle - It applies style to the item of drop down.
 * @param selectedValue - Pass the by default selected value.
 * @param onValueChange - Callback to get the selected value of the drop down.
 * @param variation(primary/secondary) - primary to set the text in center and secondary to left.
 */

class DropDown extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape([]),
    selectedValue: PropTypes.string,
    onValueChange: PropTypes.func,
    itemStyle: PropTypes.shape({}),
    dropDownStyle: PropTypes.shape({}),
    arrowImageStyle: PropTypes.shape({}),
    variation: PropTypes.string,
    bounces: PropTypes.bool,
    selectedItemFontWeight: PropTypes.string,
    dropDownItemFontWeight: PropTypes.string,
    openDropdownOnLoad: PropTypes.bool,
    isAnimateList: PropTypes.bool,
    customDropDownHeight: PropTypes.string,
    highlightStyle: PropTypes.string,
    onPressOut: PropTypes.func,
    heading: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    data: [],
    selectedValue: null,
    onValueChange: null,
    itemStyle: null,
    dropDownStyle: null,
    arrowImageStyle: null,
    variation: 'primary',
    bounces: true,
    selectedItemFontWeight: 'semibold',
    dropDownItemFontWeight: 'semibold',
    openDropdownOnLoad: false,
    isAnimateList: true,
    customDropDownHeight: '',
    highlightStyle: '',
    onPressOut: () => {},
    heading: '',
    disabled: false,
  };

  static getDerivedStateFromProps(props, state) {
    const { selectedLabelState } = state;
    if (props.selectedValue !== selectedLabelState) {
      const result = props.data.find(item => {
        if (item.value) return item.value === props.selectedValue;
        return item.id === props.selectedValue;
      });

      if (result) {
        if (result.label) return { selectedLabelState: result.label };
        return { selectedLabelState: result.displayName };
      }
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.rowFrame = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };

    this.dropDownFrame = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };

    const { data, selectedValue } = this.props;
    const selectedObject = data.find(item => {
      return item.value === selectedValue;
    });

    let selectedLabelState = '';
    if (selectedValue) {
      if (selectedObject) {
        selectedLabelState = selectedObject.label;
      } else if (data && data.length > 0) {
        // in case selectedValue is not part of data optionSet passed, then it should be the first option label
        selectedLabelState = data[0].label;
      }
    } else {
      selectedLabelState = data.label;
    }

    this.state = {
      dropDownIsOpen: false,
      selectedLabelState,
      top: 0,
      flatListTop: 0,
      flatListHeight: 0,
    };
  }

  componentDidMount() {
    const { isAnimateList } = this.props;
    if (this.rowMarker) setTimeout(() => this.calculateDropDownPosition(), isAnimateList ? 300 : 0);
  }

  componentDidUpdate() {
    const { isAnimateList } = this.props;
    if (this.rowMarker) setTimeout(() => this.calculateDropDownPosition(), isAnimateList ? 300 : 0);
  }

  /**
   * Calculate the dimension and coordinates of drop down
   */
  calculateDropDownPosition = () => {
    if (!this.rowMarker) return;
    this.rowMarker.measure((x, y, width, height, pageX, pageY) => {
      this.rowFrame = { x: pageX, y: height + pageY, width, height };

      const windowHeight = getScreenHeight();

      // calculate the list height
      const { data, itemStyle } = this.props;
      const calculateHeight = data && data.length * itemStyle.height;

      // checking bottom space
      const bottomSpace = windowHeight - this.rowFrame.y - this.rowFrame.height;
      // check drop down is in bottom or not
      const showInBottom = bottomSpace >= calculateHeight || bottomSpace >= this.rowFrame.y;

      // if it is not in bottom then taking it y coordinate to set the drop down item position
      // else subtracting device height and position of drop down y coordinate.
      const topMargin = {
        top: showInBottom ? this.rowFrame.y : Math.max(0, this.rowFrame.y - calculateHeight),
      };

      const dH = windowHeight - pageY - height;
      this.setDropDownPosition(topMargin, dH, showInBottom, calculateHeight, windowHeight);
    });
  };

  /**
   * Set drop down position
   */
  setDropDownPosition = (topMargin, dH, showInBottom, calculateHeight, windowHeight) => {
    const { customDropDownHeight, openDropdownOnLoad } = this.props;
    this.setState({ top: topMargin.top });
    let listMargin = 0;
    let listHeight = 0;

    if (showInBottom) {
      if (calculateHeight > dH) {
        listHeight = dH - 100;
      } else {
        listHeight = calculateHeight - 100;
      }
      if (customDropDownHeight) {
        listHeight = customDropDownHeight;
      }
    } else if (calculateHeight > windowHeight) {
      listMargin = 100;
      listHeight = (windowHeight * 3) / 4;
    } else {
      listHeight = calculateHeight;
    }
    this.setState({
      flatListHeight: listHeight,
      flatListTop: listMargin,
      ...(openDropdownOnLoad && { dropDownIsOpen: openDropdownOnLoad }),
    });
  };

  getAccessibilityState = (item, selectValue) => {
    return { selected: (item.id || item.value) === selectValue };
  };

  getItemColor = (item, selectValue, itemStyle) => {
    return item.id === selectValue ? 'white' : itemStyle.color;
  };

  getItemStyle = (item, selectValue, highlightStyle, itemStyle) => {
    return (item.value || item.id) === selectValue && highlightStyle ? highlightStyle : itemStyle;
  };

  /**
   * Render drop down item
   */
  dropDownLayout = (item, index) => {
    const {
      variation,
      itemStyle,
      dropDownItemFontWeight,
      highlightStyle,
      selectedValue,
    } = this.props;
    const { displayName } = item;

    let { label } = item;
    if (!label) {
      label = displayName;
    }
    let selectValue = selectedValue;
    if (Array.isArray(selectedValue)) {
      selectValue = selectedValue[0].value;
    }

    return (
      <DropDownItemContainer
        onPress={() => this.onDropDownItemClick(item, index)}
        style={this.getItemStyle(item, selectValue, highlightStyle, itemStyle)}
        accessible
        accessibilityLabel={typeof label !== 'function' ? label : ''}
        accessibilityState={this.getAccessibilityState(item, selectValue)}
        accessibilityRole="button"
      >
        {typeof label !== 'function' ? (
          <BodyCopy
            fontFamily="secondary"
            fontSize="fs13"
            color={
              !highlightStyle ? itemStyle.color : this.getItemColor(item, selectValue, itemStyle)
            }
            textAlign={variation === 'primary' || variation === 'secondary' ? 'center' : ''}
            fontWeight={dropDownItemFontWeight}
            text={label}
          />
        ) : (
          <View>{label()}</View>
        )}
      </DropDownItemContainer>
    );
  };

  /**
   * Open the drop down
   */
  openDropDown = () => {
    this.setState({
      dropDownIsOpen: true,
    });
  };

  /**
   * Handle the drop down item click
   */
  onDropDownItemClick = item => {
    let { label, value } = item;
    const { id, displayName } = item;
    if (!label) {
      label = displayName;
    }
    if (!value) value = id;
    this.setState({
      dropDownIsOpen: false,
      selectedLabelState: label,
    });

    // pass the callback here with value
    const { onValueChange } = this.props;
    if (onValueChange) onValueChange(value);
  };

  /**
   * Close the drop down
   */
  closeDropDown = () => {
    this.setState(
      {
        dropDownIsOpen: false,
      },
      () => {
        const { onPressOut } = this.props;
        if (onPressOut) {
          onPressOut();
        }
      }
    );
  };

  getColor = () => {
    const { highlightStyle } = this.props;
    return highlightStyle ? 'white' : 'gray.800';
  };

  render() {
    const {
      data,
      dropDownStyle,
      heading,
      bounces,
      disabled,
      arrowImageStyle,
      selectedItemFontWeight,
      openDropdownOnLoad,
    } = this.props;
    const { dropDownIsOpen, selectedLabelState, top, flatListTop, flatListHeight } = this.state;
    return (
      <View style={dropDownStyle}>
        {!!heading && <StyledLabel isFocused>{heading}</StyledLabel>}
        {openDropdownOnLoad ? (
          <Row
            ref={ref => {
              this.rowMarker = ref;
            }}
          />
        ) : (
          <Row
            {...this.props}
            onPress={this.openDropDown}
            ref={ref => {
              this.rowMarker = ref;
            }}
            expanded={dropDownIsOpen}
            pointerEvents={disabled ? 'none' : 'auto'}
          >
            {typeof selectedLabelState !== 'function' ? (
              <HeaderContainer>
                <BodyCopy
                  fontFamily="secondary"
                  fontSize="fs13"
                  textAlign="center"
                  color={this.getColor()}
                  fontWeight={selectedItemFontWeight}
                  text={selectedLabelState}
                />
              </HeaderContainer>
            ) : (
              <HeaderItemContainer>
                <SelectedLabelView>{selectedLabelState(true, true)}</SelectedLabelView>
              </HeaderItemContainer>
            )}
            <Image
              source={dropDownIsOpen ? upIcon : downIcon}
              alt="" // ignored
              accessibilityElementsHidden
              importantForAccessibility="no-hide-descendants"
              style={arrowImageStyle}
            />
          </Row>
        )}

        <Modal visible={dropDownIsOpen} transparent>
          <TouchableOpacityWrapper
            accessible
            accessibilityLabel="Tap to close it"
            accessibilityRole="none"
            onPress={this.closeDropDown}
            activeOpacity={1}
            height={getScreenHeight()}
            paddingTop={flatListTop}
          />
          <OverLayView
            ref={ref => {
              this.overlayMarker = ref;
            }}
            top={top}
            left={this.rowFrame.x ? this.rowFrame.x : 0}
            width={this.rowFrame.width ? this.rowFrame.width : 0}
          >
            <FlatListWrapper
              width={this.rowFrame.width ? this.rowFrame.width : 0}
              height={flatListHeight}
            >
              {dropDownIsOpen && (
                <FlatList
                  data={data}
                  isFocused
                  // eslint-disable-next-line react-native-a11y/has-valid-accessibility-role
                  accessibilityRole="combobox"
                  renderItem={({ item, index }) => this.dropDownLayout(item, index)}
                  keyExtractor={item => item.key}
                  bounces={bounces}
                  style={{ height: flatListHeight }}
                  ItemSeparatorComponent={() => <Separator />}
                />
              )}
            </FlatListWrapper>
          </OverLayView>
        </Modal>
      </View>
    );
  }
}

export default withStyles(DropDown, DropDownStyle);
export { DropDown as DropDownVanilla };
