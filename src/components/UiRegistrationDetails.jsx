/* eslint-disable react/prop-types */
const UiRegistrationDetails = ({ rightData }) => {
  return (
    <section className="h-screen bg-gray-500  items-center my-auto">
      <h1 className="font-semibold text-3xl p-4">Required Documents!</h1>

      {rightData.map((item) => (
        <div key={item.id} className="w-1/2 mx-auto">
          {item.requiredDocuments.map((element, index) => (
            <li key={index} className="text-2xl fond-bold">
              {element}
            </li>
          ))}
          {/* <li>{item.requiredDocuments[0]}</li>
          <li>{item.requiredDocuments[1]}</li>
          <li>{item.requiredDocuments[2]}</li>
          <li>{item.requiredDocuments[3]}</li> */}
        </div>
      ))}
    </section>
  );
};
export default UiRegistrationDetails;
