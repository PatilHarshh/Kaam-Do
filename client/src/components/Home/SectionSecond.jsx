import React from "react";

const SectionSecond = () => {
  // Sample data for categories
  const categories = [
    {
      id: 1,
      title: "Marketing",
      positions: "2 open positions",
      imageUrl:
        "https://www.firerockmarketing.com/wp-content/uploads/2016/02/shutterstock_395180611.jpg",
    },
    {
      id: 2,
      title: "Finance",
      positions: "3 open positions",
      imageUrl:
        "https://dynamics.folio3.com/blog/wp-content/uploads/2021/04/Financial-Management.png",
    },
    {
      id: 3,
      title: "IT",
      positions: "5 open positions",
      imageUrl:
        "https://5chat.com/wp-content/uploads/industry-2496192_1920.jpg",
    },
    {
      id: 4,
      title: "Human Resources",
      positions: "1 open position",
      imageUrl:
        "https://www.zambianguardian.com/wp-content/uploads/2022/09/Types-of-human-resource-development.jpg",
    },
    {
      id: 5,
      title: "Operations",
      positions: "4 open positions",
      imageUrl:
        "https://fupping.com/wp-content/uploads/2018/07/Operations.jpg",
    },
    {
      id: 6,
      title: "Sales",
      positions: "2 open positions",
      imageUrl:
        "https://blog.bit.ai/wp-content/uploads/2019/07/32863956976_5623d484db_b.jpg",
    },
    {
      id: 7,
      title: "Customer Service",
      positions: "3 open positions",
      imageUrl:
        "https://images.appypie.com/wp-content/uploads/2023/01/24083102/Customer-Service-Channels.jpg",
    },
    {
      id: 8,
      title: "Engineering",
      positions: "6 open positions",
      imageUrl:
        "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/18175106/Types-of-Engineering.png",
    },
  ];

  return (
    
    <div className=" container mx-auto py-8">
      <h3 className="text-center  font-bold text-3xl mb-6">
        Search by Category
      </h3>
      <p  className="text-center  underline font-semibold text-sm mb-8 text-gray-700"> Search your career opportunity with our categories</p>

      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="card bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden  w-[320px] h-[370px] mx-auto transition-transform duration-300 hover:scale-105"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold mb-2 ">{category.title}</h2>
               <div  className="flex justify-between items-center">
              <p className="text-gray-700">{category.positions}</p>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-lg transition-transform duration-300 hover:bg-blue-600">View</button>
              </div>
            </div>
          </div>
     
        ))}
      </div>
    </div>
  

  );
};

export default SectionSecond;
