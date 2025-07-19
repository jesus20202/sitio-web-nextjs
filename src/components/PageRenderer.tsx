
'use client';

import { useSection } from '@/hooks/useSection';
import { overviewContent } from '@/content/york-rite/whatsIsYorkRite/overview';
import { historyContent } from '@/content/york-rite/whatsIsYorkRite/history';
import { connectContent } from '@/content/york-rite/whatsIsYorkRite/connect';
import { locatorContent } from '@/content/york-rite/whatsIsYorkRite/locator';
import { otherOrganizationsContent } from '@/content/york-rite/whatsIsYorkRite/other_organization';
import { citiesContent } from '@/content/york-rite/locations/cities';
import { calendarContent } from '@/content/york-rite/events/calendar';
import CalendarComponent from '@/components/ui/Calendar/CalendarComponent';
import { officersConferenceContent } from '@/content/york-rite/events/officers-conference';
import { grandSessionsContent } from '@/content/york-rite/events/grand-sessions';
import { formEventFormContent } from '@/content/york-rite/events/form-event';
import { newsContent } from '@/content/york-rite/news/newsContent';
import { workmanContent } from '@/content/york-rite/news/workman';
import { swordtrowelContent } from '@/content/york-rite/news/swordtrowel';
import { crosscrownContent } from '@/content/york-rite/news/crosscrown';
import { contactGeneralContent } from '@/content/york-rite/contact/general';
import { chapterHistoryContent } from '@/content/history/chapter';
import { councilHistoryContent } from '@/content/history/council';
import { commanderyHistoryContent } from '@/content/history/commandery';
import { foundingHistoryContent } from '@/content/history/founding';
import { eventsHistoryContent } from '@/content/history/events';
import { royalArchContent } from '@/content/chapter/royal-arch';
import { chapterConnectContent } from '@/content/chapter/connect';
import { chapterEducationContent } from '@/content/chapter/education';
import { biografiaSumoSacerdoteContent } from '@/content/chapter/biografia';
import { cripticContent } from '@/content/council/criptic';
import dynamic from 'next/dynamic';


const LocatorMap = dynamic(() => import('@/components/ui/LocatorMap'), { ssr: false });


interface ImageType {
  src: string;
  alt: string;
  label?: string;
  img?: string;
  caption?: string;
}

interface LinkType {
  href: string;
  text?: string;
  label?: string;
}

interface ButtonType {
  href: string;
  text: string;
  type: 'primary' | 'secondary';
}

interface CityType {
  name: string;
  organizations: string[];
}

interface ContactType {
  title: string;
  name: string;
  role: string;
  address: string;
}

interface FieldType {
  label: string;
  name: string;
  type: string;
}

interface BookType {
  img: string;
  alt: string;
}

interface ResultType {
  name: string;
  address?: string;
  meeting?: string;
  moreInfo?: string;
  distance?: string;
  directions?: string;
}

interface OrganizationType {
  name: string;
}

interface SectionType {
  title: string;
  organizations: OrganizationType[];
}

interface ItemType {
  id?: string;
  title: string;
  href: string;
  color?: string;
}

// Mapeo de contenido disponible por ahora
const contentMap: Record<string, any> = {
  overview: overviewContent,
  history: historyContent,
  connect: connectContent,
  locator: locatorContent,
  otherOrganizations: otherOrganizationsContent,
  cities: citiesContent,
  calendar: calendarContent,
  officersConference: officersConferenceContent, 
  grandSessions: grandSessionsContent, 
  formEvent: formEventFormContent, 
  news: newsContent, 
  workman: workmanContent,
  swordTrowel: swordtrowelContent, 
  crossCrown: crosscrownContent, 
  general: contactGeneralContent,
  chapter: chapterHistoryContent,
  council: councilHistoryContent,
  commandery: commanderyHistoryContent,
  founding: foundingHistoryContent,
  events: eventsHistoryContent,
  royalArch: royalArchContent,
  chapterConnect: chapterConnectContent,
  chapterEducation: chapterEducationContent,
  biografia: biografiaSumoSacerdoteContent,
  locator: locatorContent,
  criptic: cripticContent,
};



export default function PageRenderer() {
  const {activePage} = useSection();

  // Debug logging con tipos más seguros
  

  //Si no hay página activa, no mostrar nada (deja la página principal)
  if (!activePage) {
      return null;
  }


  // Obtener el contenido de la página activa con verificación segura
  const currentContent = contentMap[activePage];

  console.log('currentContent:', currentContent);

  // Si no hay contenido disponible, mostrar mensaje temporal
  if (!currentContent) {
    return (
      <div className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Contenido en desarrollo
          </h1>
          <p className="text-gray-600 text-lg">
            Esta sección está siendo desarrollada. Por favor regresa pronto.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {!(currentContent === cripticContent ||
   currentContent === royalArchContent ) && (
  <>
        {/* Renderizar imágenes si existen */}
        {(currentContent as { images?: ImageType[] }).images && (
          <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
            {((currentContent as { images: ImageType[] }).images).map((img: ImageType) => (
              <div key={img.label} className="flex flex-col items-center">
                <img src={img.src} alt={img.alt} className="w-40 h-40 object-contain mb-2" />
                <span className="font-bold text-primary-blue text-lg text-center">{img.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Renderizar links si existen */}
        {(currentContent as { links?: LinkType[] }).links && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            {((currentContent as { links: LinkType[] }).links).map((link: LinkType, idx: number) => (
              <a
                key={idx}
                href={link.href}
                className="text-blue-700 underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}

        {/* Renderizar secciones de organizaciones si existen */}
        {currentContent.sections &&
          Array.isArray(currentContent.sections) &&
          currentContent.sections.length > 0 &&
          currentContent.sections[0].organizations
          ? (
            <div className="space-y-12">
              {currentContent.sections.map((section: SectionType, sectionIdx: number) => (
                <div key={sectionIdx} className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {section.organizations.map((org: OrganizationType, orgIdx: number) => (
                      <div key={orgIdx} className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-gray-100 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center mb-3">
                          <span className="text-xs text-center text-gray-600">
                            LOGO
                          </span>
                        </div>
                        <span className="text-sm text-gray-700 text-center max-w-[120px] leading-tight">
                          {org.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null
        }

        {/* Footer especial para organizaciones */}
        {currentContent.footer && (
          <div className="text-center mt-16">
            <div className="w-32 h-32 bg-gray-100 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center mx-auto">
              <span className="text-xs text-center text-gray-600">
                SÍMBOLO<br/>MASÓNICO
              </span>
            </div>
          </div>
        )}
      </>
    )}

      {(activePage === 'overview' || activePage === 'connect') && (
  <>
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
      {currentContent.title}
    </h1>
    {Array.isArray(currentContent.paragraphs) && (
      <div className="space-y-4 mb-8 text-center">
        {currentContent.paragraphs.map((paragraph: string, idx: number) =>
          paragraph.trim() === "" ? <br key={idx} /> : (
            <p key={idx} className="text-gray-700 text-base leading-relaxed">{paragraph}</p>
          )
        )}
      </div>
    )}
  </>
)}
        
        

        {currentContent === grandSessionsContent && (
          <div className="bg-white rounded shadow p-8 mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              {(currentContent as { subtitle: string }).subtitle}
            </h2>
            <div className="mb-4">{currentContent.description}</div>
            <div className="mb-4">
              <strong>2025 Grand Sessions Location:</strong>
              <div>{currentContent.location2025.name}</div>
              <div>{currentContent.location2025.address[0]}</div>
              <div>{currentContent.location2025.address[1]}</div>
              <div>
                Overview:{" "}
                <a
                  href={currentContent.location2025.overview.href}
                  className="text-purple-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentContent.location2025.overview.label}
                </a>
              </div>
              <div className="mt-2">
                <a
                  href={currentContent.location2025.booking.href}
                  className="text-purple-700 underline font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentContent.location2025.booking.label}
                </a>
              </div>
            </div>
            <div className="mb-4">
              <strong>2024 Sessions Location:</strong>
              <div>{currentContent.location2024.name}</div>
              <div>{currentContent.location2024.address[0]}</div>
              <div>{currentContent.location2024.address[1]}</div>
            </div>
            <h3 className="text-xl font-bold mt-8 mb-4">Grand Sessions Program Books</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {currentContent.books.map((book: BookType, idx: number) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={book.img}
                    alt={book.alt}
                    className="w-40 h-56 object-contain border border-gray-300 rounded shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Officers Conference */}
        {currentContent === officersConferenceContent && (
          <div className="bg-white rounded shadow p-8 mb-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">{currentContent.subtitle}</h2>
            <div className="mb-4">
              <strong>Date:</strong>
              <div>{currentContent.date}</div>
            </div>
            <div className="mb-4">
              <strong>Location:</strong>
              <div>{currentContent.location.name}</div>
              <div>{currentContent.location.address[0]}</div>
              <div>{currentContent.location.address[1]}</div>
              <div>
                Overview:{" "}
                <a
                  href={currentContent.location.overview.href}
                  className="text-purple-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentContent.location.overview.label}
                </a>
              </div>
            </div>
            <div className="mb-4">
              <strong>Hotel Booking Link:</strong>
              <div>
                <a
                  href={currentContent.hotelBooking.href}
                  className="text-purple-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentContent.hotelBooking.label}
                </a>
              </div>
            </div>
            <div>
              <strong>RSVP Link:</strong>
              <div>
                <a
                  href={currentContent.rsvp.href}
                  className="text-purple-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentContent.rsvp.label}
                </a>
              </div>
            </div>
          </div>
        )}


          {/* Calendario interactivo para la página de eventos */}
          {currentContent === calendarContent && (
            <div className="bg-white rounded shadow p-6 mb-12">
              <CalendarComponent />
            </div>
          )}

        {/* Renderizar lista de ciudades si existe */}
        {currentContent.cities && (
          <div className="bg-white rounded shadow p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.cities.map((city: CityType, idx: number) => (
                <div key={idx} className="border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="text-purple-700 font-semibold text-lg mb-2 underline">
                    {city.name}
                  </h3>
                  <div className="space-y-1">
                    {city.organizations.map((org: string, orgIdx: number) => (
                      <div key={orgIdx} className="text-sm text-gray-700">
                        {org}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botones de acción */}
        {currentContent.buttons && (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(currentContent.buttons as ButtonType[]).map((button: ButtonType, index: number) => (
              <a
                key={index}
                href={button.href}
                className={`px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                  button.type === 'primary'
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        )}

        {currentContent === biografiaSumoSacerdoteContent && (
        <div className="bg-white rounded shadow p-8 max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">{currentContent.title}</h2>
          <div className="flex flex-col md:flex-row gap-8 mb-6 items-start">
            <div className="flex-1 flex justify-center mb-4 md:mb-0">
              <img
                src={currentContent.image.src}
                alt={currentContent.image.alt}
                className="w-64 h-auto object-contain rounded shadow"
              />
            </div>
            <div className="flex-1">
              <ul className="mb-4 list-none pl-0">
                {currentContent.highlights.map((hl: string, idx: number) => (
                  <li key={idx} className="text-gray-700 text-base">{hl}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            {currentContent.paragraphs.map((p: string, idx: number) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      )}

                
        {/* Renderizar formulario si existe */}
        {currentContent === connectContent && (
          <form className="bg-white rounded shadow p-8 max-w-2xl mx-auto mb-8 text-left">
            {currentContent.form.fields.map((field: FieldType, idx: number) => (
              <div key={idx} className="mb-4">
                <label className="block text-gray-700 mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            ))}

            {/* Área de interés */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.areasOfInterest.label}</label>
              <div className="flex flex-wrap gap-4">
                {currentContent.form.areasOfInterest.options.map((opt: string, idx: number) => (
                  <label key={idx} className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" name="area" value={opt} />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Asunto */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.subject.label}</label>
              <div className="flex flex-wrap gap-4">
                {currentContent.form.subject.options.map((opt: string, idx: number) => (
                  <label key={idx} className="inline-flex items-center">
                    <input type="radio" className="mr-2" name="subject" value={opt} defaultChecked={idx === 0} />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Mensaje */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.message.label}</label>
              <textarea
                name={currentContent.form.message.name}
                className="w-full border border-gray-300 rounded px-3 py-2 min-h-[120px]"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
            >
              {currentContent.form.submit}
            </button>
          </form>
        )}

        {currentContent === formEventFormContent && (
        <form className="bg-white rounded shadow p-8 max-w-2xl mx-auto mb-8 text-left">
          {/* Campos básicos */}
          {currentContent.form.fields.map((field: FieldType, idx: number) => (
            <div key={idx} className="mb-4">
              <label className="block text-gray-700 mb-2">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          ))}

          {/* Tipo de evento */}
          {currentContent.form.eventType && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.eventType.label}</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2" name="eventType">
                <option value="">Seleccione una opción</option>
                {currentContent.form.eventType.options.map((opt: string, idx: number) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          )}

          {/* Organizador */}
          {currentContent.form.hostedBy && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.hostedBy.label}</label>
              <input
                type="text"
                name={currentContent.form.hostedBy.name}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          )}

          {/* Departamento */}
          {currentContent.form.department && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.department.label}</label>
              <input
                type="text"
                name={currentContent.form.department.name}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          )}

          {/* Invitados */}
          {currentContent.form.invited && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.invited.label}</label>
              <div className="flex flex-wrap gap-4">
                {currentContent.form.invited.options.map((opt: string, idx: number) => (
                  <label key={idx} className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" name="invited" value={opt} />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Vestimenta */}
          {currentContent.form.attire && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.attire.label}</label>
              <div className="flex flex-wrap gap-4">
                {currentContent.form.attire.options.map((opt: string, idx: number) => (
                  <label key={idx} className="inline-flex items-center">
                    <input type="radio" className="mr-2" name="attire" value={opt} />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Costo de comida */}
          {currentContent.form.mealCost && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.mealCost.label}</label>
              <input
                type="text"
                name={currentContent.form.mealCost.name}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          )}

          {/* Itinerario */}
          {currentContent.form.itinerary && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.itinerary.label}</label>
              <textarea
                name={currentContent.form.itinerary.name}
                className="w-full border border-gray-300 rounded px-3 py-2 min-h-[80px]"
              />
            </div>
          )}

          {/* Notas */}
          {currentContent.form.notes && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{currentContent.form.notes.label}</label>
              <textarea
                name={currentContent.form.notes.name}
                className="w-full border border-gray-300 rounded px-3 py-2 min-h-[80px]"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
          >
            {currentContent.form.submit}
          </button>
        </form>
      )}


      {currentContent === contactGeneralContent && (
      <div className="bg-white rounded shadow p-8 mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{currentContent.title}</h2>
        <p className="mb-6">{currentContent.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {currentContent.contacts.map((contact: ContactType, idx: number) => (
            <div key={idx}>
              <div className="font-bold">{contact.title}</div>
              <div>{contact.name}</div>
              <div>{contact.role}</div>
              <div>{contact.address}</div>
            </div>
          ))}
        </div>
        <form>
          {currentContent.form.fields.map((field: FieldType, idx: number) => (
            <div key={idx} className="mb-4">
              <label className="block text-gray-700 mb-2">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{currentContent.form.message.label}</label>
            <textarea
              name={currentContent.form.message.name}
              className="w-full border border-gray-300 rounded px-3 py-2 min-h-[120px]"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
          >
            {currentContent.form.submit}
          </button>
        </form>
        
      </div>
    )}

      {currentContent === chapterConnectContent && (
          <div className="bg-white rounded shadow p-8 max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">{currentContent.title}</h2>
            <p className="mb-6">{currentContent.description}</p>
            <form>
              {currentContent.form.fields.map((field: FieldType, idx: number) => (
                <div key={idx} className="mb-4">
                  <label className="block text-gray-700 mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              ))}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">{currentContent.form.subject.label}</label>
                <div className="flex gap-4">
                  {currentContent.form.subject.options.map((opt: string, idx: number) => (
                    <label key={idx} className="inline-flex items-center">
                      <input type="radio" className="mr-2" name="subject" value={opt} defaultChecked={idx === 0} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">{currentContent.form.message.label}</label>
                <textarea
                  name={currentContent.form.message.name}
                  className="w-full border border-gray-300 rounded px-3 py-2 min-h-[120px]"
                />
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
              >
                {currentContent.form.submit}
              </button>
            </form>
            
          </div>
        )}





        {/* Renderizar aviso de reCAPTCHA si existe */}
        {currentContent.recaptcha && (
          <div className="text-xs text-gray-500 mt-2 text-center">
            {currentContent.recaptcha.text}{" "}
            <a href="#" className="underline">{currentContent.recaptcha.privacy}</a> y{" "}
            <a href="#" className="underline">{currentContent.recaptcha.terms}</a>.
          </div>
        )}

        

        {currentContent === chapterHistoryContent && (
          <div className="bg-white rounded shadow p-8 max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-6">{currentContent.title}</h1>
              <ul className="mb-6 space-y-2">
                {currentContent.links.map((link: LinkType, idx: number) => (
                  <li key={idx}>
                    <a href={link.href} className="text-blue-700 hover:underline">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={currentContent.image.src}
                alt={currentContent.image.alt}
                className="max-w-xs w-full h-auto"
              />
            </div>
          </div>
        )}

        {currentContent === councilHistoryContent && (
          <div className="bg-white rounded shadow p-8 max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-6">{currentContent.title}</h1>
              <ul className="mb-6 space-y-2">
                {currentContent.links.map((link: LinkType, idx: number) => (
                  <li key={idx}>
                    <a href={link.href} className="text-blue-700 hover:underline">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={currentContent.image.src}
                alt={currentContent.image.alt}
                className="max-w-xs w-full h-auto"
              />
            </div>
          </div>
        )}

        {(currentContent === foundingHistoryContent || currentContent === eventsHistoryContent) && (
          <div className="bg-white rounded shadow p-8 max-w-5xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">{currentContent.title}</h2>
            <p className="mb-6 text-gray-600">{currentContent.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {currentContent.items.map((item: ItemType, idx: number) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-28 h-28 object-contain border border-gray-300 rounded shadow mb-2"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {currentContent === chapterEducationContent && (
        <div className="bg-white rounded shadow p-8 max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4">{currentContent.title}</h2>
          <div className="mb-8 text-gray-700">{currentContent.subtitle}</div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b border-gray-300 text-left font-semibold">Título</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left font-semibold">Autores</th>
                </tr>
              </thead>
              <tbody>
                {currentContent.table.map((row: { title: string; author: string }, idx: number) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <a href="#" className="text-purple-700 underline">{row.title}</a>
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">{row.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
        
      {currentContent === cripticContent && (
      <div className="bg-white rounded shadow p-8 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6">{currentContent.title}</h2>
        <div className="space-y-4 mb-8">
          {currentContent.paragraphs.map((p: string, idx: number) => (
            <p key={idx} className="text-gray-700 text-base leading-relaxed">{p}</p>
          ))}
        </div>
        
        {currentContent.sections.map((section: any, idx: number) => (
          <div key={idx} className="mb-10">
            {section.title && (
              <h3 className="text-lg font-bold text-center text-gray-800 mb-4">{section.title}</h3>
            )}
            {section.image && (
              <div className="flex justify-center mb-4">
                <img src={section.image.src} alt={section.image.alt} className="w-40 h-40 object-contain" />
              </div>
            )}
            {section.description && (
              <p className="text-gray-700 text-base leading-relaxed">{section.description}</p>
            )}
          </div>
        ))}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          {currentContent.footer.buttons.map((btn: any, idx: number) => (
            <a
              key={idx}
              href={btn.href}
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition text-center font-semibold"
            >
              {btn.text}
            </a>
          ))}
        </div>
        <div className="text-center mb-8">
          <span className="font-bold">LEER MÁS...</span>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-2">
            {currentContent.footer.more.map((item: any, idx: number) => (
              <a key={idx} href={item.href} className="text-gray-700 underline text-sm">{item.text}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {currentContent.footer.logos.map((logo: any, idx: number) => (
            <img key={idx} src={logo.src} alt={logo.alt} className="w-24 h-24 object-contain" />
          ))}
        </div>
        <div className="text-center mb-4">
          {currentContent.footer.masonry.map((item: any, idx: number) => (
            <div key={idx}>
              <a href={item.href} className="text-purple-700 underline text-sm">{item.text}</a>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-8">
          <img src={currentContent.footer.masonicLogo.src} alt={currentContent.footer.masonicLogo.alt} className="w-24 h-24 object-contain" />
        </div>
      </div>
    )}

        {currentContent === commanderyHistoryContent && (
          <div className="bg-white rounded shadow p-8 max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-6">{currentContent.title}</h1>
              <ul className="mb-6 space-y-2">
                {currentContent.links.map((link: LinkType, idx: number) => (
                  <li key={idx}>
                    <a href={link.href} className="text-blue-700 hover:underline">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={currentContent.image.src}
                alt={currentContent.image.alt}
                className="max-w-xs w-full h-auto"
              />
            </div>
          </div>
        )}
        
        {(currentContent === newsContent ||
          currentContent === workmanContent ||
          currentContent === swordtrowelContent ||
          currentContent === crosscrownContent) && (
          <div className="bg-white rounded shadow p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">{currentContent.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {currentContent.items.map((item: ItemType, idx: number) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-48 h-36 object-cover border border-gray-300 rounded shadow mb-2"
                  />
                  <span className="text-sm text-gray-700 text-center">{item.caption}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Renderizar visual de locator si existe */}
        {currentContent.locator && (
  <div className="bg-white rounded shadow p-6 mb-12">
    <h2 className="text-2xl font-bold mb-4">{currentContent.title}</h2>
    <div className="mb-4 text-gray-700">{currentContent.paragraphs?.[0]}</div>
    <div className="flex flex-col md:flex-row gap-8">
      {/* Filtros */}
      <div className="flex-1 mb-6 md:mb-0">
        <form className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-gray-700 mb-1">{currentContent.locator.filters.cityOrZip}</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" placeholder="Ej: Lima, 15001" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">{currentContent.locator.filters.radius}</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-full">
              {currentContent.locator.filters.radiusOptions.map((opt: string) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">{currentContent.locator.filters.results}</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-full">
              {currentContent.locator.filters.resultsOptions.map((opt: string) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">{currentContent.locator.filters.category}</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-full">
              {currentContent.locator.filters.categoryOptions.map((opt: string) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded ml-2">
            {currentContent.locator.filters.search}
          </button>
        </form>
        {/* Resultados de ejemplo */}
        <div className="mt-6">
          {currentContent.locator.exampleResults.map((res: ResultType, idx: number) => (
            <div key={idx} className="mb-4">
              <a href="#" className="text-purple-800 underline font-semibold">{res.name}</a>
              {res.address && <div className="text-sm text-gray-700">{res.address}</div>}
              {res.meeting && <div className="text-sm text-gray-700">{res.meeting}</div>}
              {res.moreInfo && <div className="text-sm"><a href="#" className="underline">{res.moreInfo}</a></div>}
              {res.distance && <div className="text-xs text-gray-500">{res.distance}</div>}
              {res.directions && <div className="text-xs"><a href="#" className="underline">{res.directions}</a></div>}
            </div>
          ))}
        </div>
      </div>
      {/* Mapa animado con marcadores */}
      <div className="flex-1 flex justify-center items-center min-w-[320px]">
        <LocatorMap
          center={currentContent.map.center}
          zoom={currentContent.map.zoom}
          locations={currentContent.locator.exampleResults}
        />
      </div>
    </div>
  </div>
)}

        {currentContent === royalArchContent && (
          <div className="bg-white rounded shadow p-8 max-w-5xl mx-auto mb-12">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              {currentContent.title}
            </h1>
            {/* Párrafos introductorios */}
            <div className="space-y-4 mb-8 text-center">
              {Array.isArray(currentContent.paragraphs) &&
                currentContent.paragraphs.map((paragraph: string, idx: number) =>
                  paragraph.trim() === "" ? <br key={idx} /> : (
                    <p key={idx} className="text-gray-700 text-base leading-relaxed">{paragraph}</p>
                  )
                )
              }
            </div>
            {/* Secciones de grados */}
            <div className="space-y-12">
              {Array.isArray(currentContent.sections) &&
                currentContent.sections.map((section: any, idx: number) => (
                  <div key={idx} className="flex flex-col md:flex-row items-center mb-8">
                    <div className="flex-1 mb-4 md:mb-0 md:mr-8">
                      <h2 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h2>
                      <p className="text-gray-700 text-base">{section.description}</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        className="w-40 h-40 object-contain rounded shadow"
                      />
                    </div>
                  </div>
                ))
              }
            </div>
            {/* Footer de lecturas complementarias */}
            {currentContent.footer && Array.isArray(currentContent.footer.items) && (
              <div className="mt-12 text-center">
                <h3 className="text-lg font-semibold mb-4">{currentContent.footer.title}</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {currentContent.footer.items.map((item: any, idx: number) => (
                    <div key={idx} className="flex flex-col items-center">
                      <img src={item.src} alt={item.alt} className="w-24 h-24 object-contain mb-2" />
                      <span className="text-sm text-gray-700">{item.alt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}



        {/* Renderizar secciones de organizaciones si existen */}
        {currentContent.sections &&
          Array.isArray(currentContent.sections) &&
          currentContent.sections.length > 0 &&
          // Solo renderiza si la primera sección tiene 'organizations'
          currentContent.sections[0].organizations
          ? (
            <div className="space-y-12">
              {currentContent.sections.map((section: SectionType, sectionIdx: number) => (
                <div key={sectionIdx} className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {section.organizations.map((org: OrganizationType, orgIdx: number) => (
                      <div key={orgIdx} className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-gray-100 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center mb-3">
                          <span className="text-xs text-center text-gray-600">
                            LOGO
                          </span>
                        </div>
                        <span className="text-sm text-gray-700 text-center max-w-[120px] leading-tight">
                          {org.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null
        }



        

        {/* Further Reading Section */}
        {currentContent.furtherReading && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              {currentContent.furtherReading.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {currentContent.furtherReading.items.map((item: ItemType) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 ${
                    item.color === 'brown' ? 'border-amber-800 bg-amber-50' :
                    item.color === 'blue' ? 'border-blue-600 bg-blue-50' :
                    item.color === 'gold' ? 'border-yellow-500 bg-yellow-50' :
                    'border-gray-400 bg-gray-50'
                  }`}>
                    <span className="text-xs text-center px-2">
                      {item.title}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 text-center">
                    {item.title}
                  </h3>
                </a>
              ))}
            </div>
            {/* Additional item si existe */}
            {currentContent.furtherReading.additional && (
              <div className="mt-8">
                <a
                  href={currentContent.furtherReading.additional.href}
                  className="inline-flex flex-col items-center group cursor-pointer"
                >
                  <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 ${
                    currentContent.furtherReading.additional.color === 'dark-blue' 
                      ? 'border-blue-900 bg-blue-50' 
                      : 'border-gray-400 bg-gray-50'
                  }`}>
                    <span className="text-xs text-center px-2">
                      {currentContent.furtherReading.additional.title}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 text-center">
                    {currentContent.furtherReading.additional.title}
                  </h3>
                  <p className="text-xs text-gray-600 text-center mt-1">
                    {currentContent.furtherReading.additional.subtitle}
                  </p>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}