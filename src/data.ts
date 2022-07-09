interface Post {
  postId: string;
  userId: string;
  likes: number;
  comments: number;
  hasLiked: boolean;
  imageURLs: string[];
  audioURL: string;
  chassis: string;
  layout: string;
  switches: string;
  mountingStyle: string;
  caseMaterial: string;
  plateMaterial: string;
  mods: string[];
}

const dummyPosts: Post[] = [
  {
    postId: "1",
    userId: "a",
    likes: 19,
    comments: 3,
    hasLiked: true,
    imageURLs: [
      "https://www.extremetech.com/wp-content/uploads/2020/01/TAE07156_Edit-640x353.jpg",
      "https://cdn.vox-cdn.com/thumbor/qUotpINIp7JDwIjLmQngnrpFvEE=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19606512/EN8QytwVAAAfPJh.jpeg",
    ],
    audioURL: "../public/audio/my-keeb.m4a",
    chassis: "Ziyou lang",
    layout: "65%",
    switches: "Akko CS Lavender Purple",
    mountingStyle: "Tray Mount",
    caseMaterial: "Plastic",
    plateMaterial: "Alluminum",
    mods: ["Tempest Mod", "Case Foam"],
  },
  {
    postId: "2",
    userId: "b",
    likes: 5,
    comments: 1,
    hasLiked: false,
    imageURLs: [
      "https://cdn.vox-cdn.com/thumbor/qUotpINIp7JDwIjLmQngnrpFvEE=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19606512/EN8QytwVAAAfPJh.jpeg",
      "https://www.extremetech.com/wp-content/uploads/2020/01/TAE07156_Edit-640x353.jpg",
    ],
    audioURL: "../public/audio/my-keeb.m4a",
    chassis: "Ziyou lang",
    layout: "65%",
    switches: "Akko CS Lavender Purple",
    mountingStyle: "Tray Mount",
    caseMaterial: "Plastic",
    plateMaterial: "Alluminum",
    mods: ["Tempest Mod", "Case Foam"],
  },
];

export default dummyPosts;
