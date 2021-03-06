import * as React from 'react';
import {
  View,
  Animated,
  PanResponder,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface props {
  children?:
    | JSX.Element
    | JSX.Element[]
    | React.Component
    | React.Component[]
    | any;
  styleButtonRight?: ViewStyle;
  styleButtonLeft?: ViewStyle;
  containerStyle?: ViewStyle;
  buttonRight?: JSX.Element[] | JSX.Element;
  buttonLeft?: JSX.Element[] | JSX.Element;
  onPressRight: () => void;
  onPressLeft: () => void;
  activeSwipeChoose?: boolean;
}

const SwipeToChoice = ({
  children,
  styleButtonRight,
  styleButtonLeft,
  containerStyle,
  onPressRight,
  onPressLeft,
  buttonRight = <Text>Approve</Text>,
  buttonLeft = <Text>Delete</Text>,
  activeSwipeChoose = true,
}: props): JSX.Element => {
  const pan = React.useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const SpringAnimated = (x: number, y: number) => {
    Animated.spring(pan, {
      toValue: { x: x, y: y },
      useNativeDriver: true,
      bounciness: 1,
    }).start();
  };
  const panResponder = () => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event: any, gesture: any) => {
        if (gesture.dx < 101 && gesture.dx > -104) {
          pan.setValue({ x: gesture.dx, y: 0 });
        }
        event.preventDefault();
      },
      onPanResponderRelease: (event, gesture: any) => {
        if (gesture.dx > 30) {
          SpringAnimated(101, 0);
          activeSwipeChoose && onPressLeft();
        } else if (gesture.dx < -30) {
          SpringAnimated(-101, 0);
          activeSwipeChoose && onPressRight();
        } else {
          SpringAnimated(0, 0);
        }
        event.preventDefault();
      },
    });
  };

  return (
    <>
      <View>
        <View style={styles().buttonContainer(children?.props.style.height)}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={onPressLeft}
            style={[
              styles().leftButtonContainer(children?.props.style.height),
              styleButtonLeft,
            ]}
          >
            {buttonLeft}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles().rightButtonContainer(children?.props.style.height),
              styleButtonRight,
            ]}
            onPress={onPressRight}
            activeOpacity={1}
          >
            {buttonRight}
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: pan.x,
              },
              {
                translateY: pan.y,
              },
            ],
          }}
          {...panResponder().panHandlers}
        >
          <TouchableOpacity
            onPress={() => {
              SpringAnimated(0, 0);
            }}
            activeOpacity={1}
            style={[
              styles().button(children?.props.style.height),
              containerStyle,
            ]}
          >
            <>{children}</>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
};

const styles: any = () => ({
  button: (height = 55) => ({
    width: '100%',
    height: height,
    backgroundColor: 'yellow',
  }),
  buttonContainer: (height = 55) => ({
    position: 'absolute',
    height: height,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  rightButtonContainer: (height = 55) => ({
    width: 100,
    backgroundColor: 'green',
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  leftButtonContainer: (height = 55) => ({
    width: 100,
    backgroundColor: 'red',
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});

export default SwipeToChoice;
