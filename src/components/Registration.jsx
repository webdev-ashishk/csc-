/* eslint-disable react/prop-types */

export default function Registration({ RegistrationData }) {
  console.log(RegistrationData);
  return (
    <section>
      <h1 className="text-5xl font-bold text-center text-blue-500 p-4">
        Apply New Forms
      </h1>
      <hr className="pb-4" />
      <article className="flex justify-start w-10/12  mx-auto items-center flex-wrap gap-4">
        {RegistrationData.map((element) => (
          <article
            key={element.id}
            className="hover:bg-blue-300 rounded-lg p-2 m-2 bg-gray-400"
          >
            <img
              src={element.imageUrl}
              width={300}
              height={100}
              alt="registration-services-image"
              className="rounded-lg"
            />
            <p className="font-extrabold text-3xl text-center">
              {element.title}
            </p>
          </article>
        ))}
      </article>
    </section>
  );
}
