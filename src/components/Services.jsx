import DownloadServices from '../data/downloadService.json';
import PhotoServiceData from '../data/photoService.json';
import RegistrationData from '../data/registrationService.json';
import Download from './Download';
import Photo from './Photo';
import Registration from './Registration';
export default function Services() {
  return (
    <section>
      <Registration RegistrationData={RegistrationData} />
      <Photo PhotoServiceData={PhotoServiceData} />
      <Download DownloadServices={DownloadServices}  />
    </section>
  );
}
