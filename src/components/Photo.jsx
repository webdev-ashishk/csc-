/* eslint-disable react/prop-types */
export default function Photo({ PhotoServiceData }) {
  console.log(PhotoServiceData);
  return (
    <section>
      <article>
        <h1>Photos Services !</h1>
        {PhotoServiceData.map((element) => {
          return <article key={element.id}>{element.id}</article>;
        })}
      </article>
    </section>
  );
}
