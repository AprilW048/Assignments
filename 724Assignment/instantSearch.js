var app = angular.module("search", []);
app.controller("searchController", function ($scope) {
  var emojis = [
    {
      title: "Grinning",
      symbol: "😀",
      keywords: "grinning face happy smiley emotion emotion",
    },
    {
      title: "Grin",
      symbol: "😁",
      keywords:
        "grinning face with smiling eyes happy silly smiley emotion emotion good good selfie selfie",
    },
    {
      title: "Joy",
      symbol: "😂",
      keywords:
        "face with tears of joy happy silly smiley cry laugh laugh emotion emotion sarcastic sarcastic",
    },
    {
      title: "Smiley",
      symbol: "😃",
      keywords:
        "smiling face with open mouth happy smiley emotion emotion good good",
    },
    {
      title: "Smile",
      symbol: "😄",
      keywords:
        "smiling face with open mouth and smiling eyes happy smiley emotion emotion",
    },
    {
      title: "Sweat Smile",
      symbol: "😅",
      keywords:
        "smiling face with open mouth and cold sweat smiley workout sweat emotion emotion",
    },
    {
      title: "Laughing",
      symbol: "😆",
      keywords:
        "smiling face with open mouth and tightly-closed eyes happy smiley laugh laugh emotion emotion",
    },
    {
      title: "Innocent",
      symbol: "😇",
      keywords: "smiling face with halo smiley emotion emotion",
    },
    {
      title: "Wink",
      symbol: "😉",
      keywords: "winking face silly smiley emotion emotion",
    },
    {
      title: "Blush",
      symbol: "😊",
      keywords:
        "smiling face with smiling eyes happy smiley emotion emotion good good beautiful beautiful",
    },
    {
      title: "Slight Smile",
      symbol: "🙂",
      keywords: "slightly smiling face happy smiley",
    },
    {
      title: "Upside Down",
      symbol: "🙃",
      keywords: "upside-down face silly smiley sarcastic sarcastic",
    },
    {
      title: "Yum",
      symbol: "😋",
      keywords:
        "face savouring delicious food happy silly smiley emotion emotion sarcastic sarcastic good good",
    },
    {
      title: "Kissing Heart",
      symbol: "😘",
      keywords: "face throwing a kiss smiley love sexy",
    },
    {
      title: "Kissing",
      symbol: "😗",
      keywords: "kissing face smiley sexy",
    },
    {
      title: "Kissing Smiling Eyes",
      symbol: "😙",
      keywords: "kissing face with smiling eyes smiley sexy",
    },
  ];

  $scope.$watch("searchVal", function (newVal, oldVal) {
    $scope.emojis = newVal
      ? emojis.filter((emoji) =>
          emoji.title.toLocaleLowerCase().includes(newVal.toLocaleLowerCase())
        )
      : emojis;
  });
});
