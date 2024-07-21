const WorkList = (props) => {
  const works = props.works;
  return (
    <>
      {works.map((work) => (
        <div
          className="  shadow-xl  hover:shadow-xl hover:shadow-[#dcdadb] border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-lg  flex flex-col justify-between leading-normal  group transition "
          id={work.id}
        >
          <img src={work.image} class="w-full mb-3" alt="project" />
          <div className="p-4 pt-2">
            <div className="mb-8">
              <a
                href={work.code_link}
                className="text-[#b70048] font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
              >
                {work.title}
              </a>
              <p className="text-[#b70048] text-sm">{work.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkList;
