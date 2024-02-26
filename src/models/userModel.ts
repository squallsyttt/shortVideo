const Page = () => {
  const user = {
    username: 'griffith',
  };

  return { user };
};

export default Page;

// 函数式声明写法
// export default function Page() {
//   const user = {
//     username: 'griffith',
//   }
//
//   return {user};
// };
