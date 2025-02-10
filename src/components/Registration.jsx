/* eslint-disable react/prop-types */

import Welcome from './Welcome';

export default function Registration({ RegistrationData }) {
  return (
    <section className="">
      <Welcome className="" id="welcome2" />
      <p className="text-center py-2">
        <p
          className="text-[2rem] font-extrabold text-center text-blue-500 "
          id="space-mono-bold-italic"
        >
          New Forms
        </p>
      </p>

      <article className="flex justify-center lg:justify-start items-center flex-wrap bg-gray-200 px-4 m-2 py-12 rounded-lg shadow-2xl shadow-blue-400">
        {RegistrationData.map((element) => (
          <article
            key={element.id}
            className="hover:bg-blue-300 hover:border-2 hover:border-blue-400 bg-blue-200 overflow-hidden rounded-2xl my-2 border-2 w-[300px]
          h-[200px] m-2"
          >
            <a href={`${element.link}`} target="_blank">
              <img
                src={element.imageUrl}
                alt="registration-services-image"
                className=""
                width={300}
                height={200}
              />
              <p className="font-bold text-[0.9rem] text-center">
                {element.title}
              </p>
            </a>
          </article>
        ))}
      </article>
    </section>
  );
}
