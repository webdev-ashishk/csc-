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

      <article className="flex justify-center items-center flex-wrap bg-gray-200 p-4 m-2 py-10 rounded-2xl shadow-2xl shadow-blue-800">
        {RegistrationData.map((element) => (
          <article
            key={element.id}
            className="hover:bg-blue-300 hover:border-2 hover:border-blue-400 bg-blue-100 overflow-hidden rounded-2xl mx-auto my-2 border-2 w-[300px]
          h-[200px]"
          >
            <a href={`${element.link}`} target="_blank">
              <img
                src={element.imageUrl}
                alt="registration-services-image"
                className=""
                width={300}
                height={200}
              />
            </a>
            <p className="font-bold text-[0.9rem] text-center">
              {element.title}
            </p>
          </article>
        ))}
      </article>
    </section>
  );
}
