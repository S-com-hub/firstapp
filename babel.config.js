// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//   };
// };



// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//   ///This Plugin should be last
//   'react-native-reanimated/plugin',
//   ],
//   };


module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
 };
 