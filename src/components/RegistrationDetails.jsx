import { useParams } from 'react-router-dom';
import registrationData from '../data/registrationService.json';
import UiRegistrationDetails from './UiRegistrationDetails';
export default function RegistrationDetails() {
  const { id } = useParams();
  console.log('params id:', id);
  console.log(registrationData);

  // const rightData = registrationData.filter((register) => register?.id == id);
  const rightData = registrationData.filter((register) => {
    return register?.id == id;
  });
  console.log('rightData:', rightData);
  // console.log(typeof rightData);
  // const [description] = rightData.description;
  // console.log(description);
  return (
    <section>
      <UiRegistrationDetails rightData={rightData} />
    </section>
  );
}
