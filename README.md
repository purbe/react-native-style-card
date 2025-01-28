# React Native Style Card

A React Native component that provides a customizable card interface for displaying content in a structured and visually appealing manner.

## Features

- Customizable card styles
- Easy integration into React Native projects
- Supports various content types within the card

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/purbe/react-native-style-card.git
   cd react-native-style-card
2. Install Dependencies:
    ```
   npm install
## Usage
1. Import the Component:
``` javascript
import StyleCard from './components/StyleCard';
```
2. Use the Component:
```
const App = () => {
  return (
    <StyleCard
      title="Card Title"
      content="This is the content of the card."
      style={{ backgroundColor: '#f8f9fa' }}
    />
  );
};

export default App;
```
## Props

The `StyleCard` component accepts the following props:

| Prop      | Type     | Default              | Description                          |
|-----------|----------|----------------------|--------------------------------------|
| `title`   | `string` | `undefined`          | The title displayed on the card.     |
| `content` | `string` | `undefined`          | The main content of the card.        |
| `style`   | `object` | `{}`                 | Custom styles for the card container.|
| `onPress` | `func`   | `undefined`          | Callback function for card press.    |
| `image`   | `string` | `undefined`          | Optional image URL to display in the card. |
| `elevation`| `number`| `2`                  | Elevation/shadow for the card on Android. |
| `borderRadius`| `number`| `8`              | Border radius of the card.           |

### Example Usage

Here’s an example using multiple props:

```javascript
import StyleCard from './components/StyleCard';

const App = () => {
  return (
    <StyleCard
      title="Welcome"
      content="This is a beautiful card component."
      style={{ backgroundColor: '#f8f9fa', padding: 16 }}
      image="https://example.com/image.jpg"
      onPress={() => alert('Card Pressed!')}
      elevation={5}
      borderRadius={12}
    />
  );
};

export default App;
```
## Running the Application
To run the application on an emulator or physical device:

Start the Metro Bundler:
```bash
npm start
```
Run on Android:
```bash
npm run android
```
Run on iOS:
```bash
npm run ios
```
## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
