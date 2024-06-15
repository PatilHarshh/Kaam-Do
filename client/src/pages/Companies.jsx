import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CompanyCard, CustomButton, Header, ListBox } from "../components";
import { companies } from "../utils/data";

const Companies = () => {
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordsCount, setRecordsCount] = useState(0);
  const [data, setData] = useState(companies ?? []);
  const [searchQuery, setSearchQuery] = useState("");
  const [cmpLocation, setCmpLocation] = useState("");
  const [sort, setSort] = useState("Newest");
  const [isFetching, setIsFetching] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchSubmit = () => { };
  const handleShowMore = () => { };

  return (
    <div className='w-full'>
      <style>
        {`
          .card-hover {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          .container{
            padding:50px
          }
        `}
      </style>
      <Header
        title='Find Your Dream Company'
        handleClick={handleSearchSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={cmpLocation}
        setLocation={setSearchQuery}
      />

      <div className='container mx-auto flex flex-col gap-5 2xl:gap-10 px-5 md:px-0 py-6 bg-[#f7fdfd] dark:bg-slate-800' >
        <div className='flex items-center justify-between mb-4'>
          <p className='text-sm md:text-base'>
            Showing: <span className='font-semibold'>1,902</span> Companies
            Available
          </p>

          <div className='flex flex-col gap-0 md:flex-row md:gap-2 md:items-center'>
            <p className='text-sm md:text-base'>Sort By:</p>

            <ListBox sort={sort} setSort={setSort} sx={{ color: 'red' }}/>
          </div>
        </div>

        <div className='flex flex-col w-full gap-6 p-10'>
          {data?.map((cmp, index) => (
            <div className="card-hover" key={index}>
              <CompanyCard cmp={cmp} />
            </div>
          ))}

          {isFetching && (
            <div className='mt-10'>
              <Loading />
            </div>
          )}

          <p className='text-sm text-right'>
            {data?.length} records out of {recordsCount}
          </p>
        </div>

        {numPage > page && !isFetching && (
          <div className='flex items-center justify-center w-full pt-16'>
            <CustomButton
              onClick={handleShowMore}
              title='Load More'
              containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Companies;
