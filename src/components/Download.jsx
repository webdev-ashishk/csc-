/* eslint-disable react/prop-types */
export default function Download({ DownloadServices }) {
  console.log(DownloadServices);
  return (
    <section>
      <article>
        <h1>Download Services </h1>
        <hr />
        {DownloadServices.map((element) => {
          return <article key={element.id}>{element.id}</article>;
        })}
      </article>
    </section>
  );
}
