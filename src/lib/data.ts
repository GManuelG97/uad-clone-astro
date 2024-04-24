import type { IGlobal } from "@/types/routers.interface";
import type { ISlider } from "@/types/slider.interface";

export const data: IGlobal = {
  nameSite: "Universidad Autónoma de Durango",
  logo: "/img/svg/pasted-svg-1051691x212.svg",
  routers: [
    {
      name: "Nosotros",
      url: "#",
    },
    {
      name: "Campus",
      url: "#",
    },
    {
      name: "Educación",
      url: "#",
      subRoute: [
        {
          name: "Licenciatura Autómata",
          url: "#",
        },
        {
          name: "Licenciaturas Santander",
          url: "#",
        },
        {
          name: "Licenciaturas Ejecutivas",
          url: "#",
        },
        {
          name: "Licenciatura en Linea",
          url: "#",
        },
        {
          name: "Preparatoria",
          url: "#",
        },
        {
          name: "Posgrado",
          url: "#",
        },
        {
          name: "Faculdad de medicina UAD",
          url: "#",
        },
        {
          name: "Medicina UAD Mixta Virtual",
          url: "#",
        },
        {
          name: "Correspondencia SAC",
          url: "#",
        },
        {
          name: "Santander Live Streaming",
          url: "#",
        },
        {
          name: "Colegio de Ingles Durango",
          url: "#",
        },
      ],
    },
    {
      name: "Orgullo lobo",
      url: "#",
    },
    {
      name: "Congresos",
      url: "#",
    },
    {
      name: "Blog",
      url: "#",
    },
    {
      name: "contacto",
      url: "#",
    },
  ],
};

export const images: ISlider[]  = [
  {
    background: "/img/jpg/iniciouad.jpg",
    alt: "imagen de la universidad autónoma de Durango",
    col: 3,
    row: 1,
    span: 2,
    complement: "/img/svg/svg-pegado-1172839x294.svg",
    color: "black",
  },
  {
    background: "/img/jpg/iniciouadcid.jpg",
    alt: "Niños en la universidad autónoma de Durango",
    col: 1,
    row: 1,
    span: 3,
    complement: "/img/svg/pasted-svg-831329x154.svg",
    color: "white",
  },
  {
    background: "/img/jpg/iniciouadejecutivas.jpg",
    alt: "Ejecutivas",
    col: 3,
    row: 2,
    complement: "/img/svg/svg-pegado-1590545x426.svg",
    color: "black",
  },
];
