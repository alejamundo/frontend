import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import ReactPlayer from 'react-player';
import logoss from '../../public/img/logop.png';

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Bienvenido a Don Henry Café
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Café colombiano de calidad superior, en un acogedor espacio para amantes del buen café.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description, image }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
                image={image}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-26 items-center justify-center ">
                <img src={logoss} alt='logo' className="w-25 h-20 mb-4 mx-auto" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Quiénes Somos
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500 text-justify">
                Sumérgete en nuestro mundo y descubre una amplia gama de cafés de origen único, cuidadosamente seleccionados de las mejores cosechas de Colombia. Desde los exuberantes paisajes montañosos hasta las manos expertas que cultivan y procesan estos granos, cada taza de café que servimos cuenta una historia de pasión y calidad inigualable.
                <br />
                <br />
                En Don Henry Café, no solo te ofrecemos una experiencia de degustación excepcional, sino que también te invitamos a explorar y aprender sobre el arte detrás de cada taza. Nuestros expertos baristas te guiarán a través del proceso de elaboración, desde la cosecha hasta la preparación, revelando los secretos que hacen que nuestros cafés sean únicos en sabor y aroma.
                <br />
                <br />
                Además de deleitarte con nuestra selección exclusiva de cafés, podrás disfrutar de un ambiente acogedor y relajante que complementa a la perfección la experiencia sensorial que ofrecemos. Desde los momentos íntimos de la primera taza del día hasta las conversaciones animadas en una tarde soleada, Don Henry Café es el lugar donde los apasionados del café encuentran su hogar.
                <br /><br />

              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/somo.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Conoce nuestra historia</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Visitanos
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    En el corazón de Medellín, en el concurrido Centro Comercial Los Molinos, se encuentra Don Henry Café, un rincón acogedor que destaca entre la multitud. La historia de este lugar tan especial está entrelazada con la determinación y la pasión de su fundador, Henry González.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/70 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12 ">
              <Typography
                variant="h2"
                color="white"
                className="mt-40 mb-6 font-black "
              >
                Conoce más de  Don Henry Café
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 mb-5">
                Te invitamos a sumergirte en el mundo del café en Don Henry Café y a disfrutar de una experiencia que estimulará tus sentidos, alimentará tu curiosidad y te llevará en un viaje sensorial por los sabores auténticos de Colombia.
              </Typography>
              <div style={{ maxWidth: '600px', margin: '0 auto', marginTop: '5px', borderRadius: '8px' }}>
                <iframe
                  title="Facebook Video"
                  src="https://www.facebook.com/plugins/video.php?height=600&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F828185475720713%2F"
                  width="100%"
                  height="600px"
                  style={{ border: 'none', overflow: 'hidden', borderRadius: '8px' }}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>

      <section className="px-4 pt-20 pb-40 ">
        <div className="container mx-auto">
          <PageTitle section="Nuestros clientes" heading="Comentarios acerca del producto">
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, rating }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                rating={rating}
              />

            ))}

          </div>
        </div>
      </section>

      <div className="bg-gray-50 ">
        <Footer />
      </div>
    </>
  );
}



export default Home;
