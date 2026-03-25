import type { ProjectsData } from '../types/main'
import shopTsImage from '../assets/images/logo/logo-dziecko.jpg'
import shopTsPart1 from '../assets/images/logo/logo-mama.jpg'
import shopTsPart2 from '../assets/images/shop-ts-part2.jpeg'

export const projects: ProjectsData = {
  order: ['shop-ts', 'hall-reservation'],

  projectsList: {
    'shop-ts': {
      id: 'shop-ts',
      label: 'Shop TS',
      background: shopTsImage,
      images: [shopTsImage, shopTsPart1, shopTsPart2],
      link: {
        href: 'https://github.com/AgnieszkaDra/shop-TS',
        label: 'View project',
        external: true,
      },
      description:
        'An e-commerce web application built with TypeScript, json-server, and Vite. Users can browse products, manage a cart, and place orders.',
      tags: ['TypeScript', 'E-commerce', 'Vite'],
      details: {
        title: 'Shop-TS',
        introduction:
          'Ten projekt to aplikacja webowa typu e-commerce zbudowana przy użyciu TypeScript, json-server oraz Vite.',
        features: {
          title: 'Cechy projektu',
          client: {
            title: 'Po stronie klienta',
            features: [
              {
                title: 'Rejestracja użytkownika',
                description:
                  'Pozwala użytkownikom utworzyć konto poprzez podanie wymaganych danych osobowych i danych logowania.',
              },
              {
                title: 'Logowanie użytkownika',
                description:
                  'Zapewnia bezpieczne uwierzytelnianie dla zarejestrowanych użytkowników.',
              },
              {
                title: 'Lista produktów',
                description:
                  'Wyświetla pełną listę dostępnych produktów, pozwalając użytkownikom przeglądać ofertę, sprawdzać szczegóły i wybierać interesujące ich produkty.',
              },
              {
                title: 'Koszyk zakupowy',
                description:
                  'Przechowuje wybrane produkty przed finalnym złożeniem zamówienia, umożliwiając przeglądanie, modyfikację ilości oraz usuwanie przedmiotów.',
              },
              {
                title: 'Tworzenie zamówienia',
                description:
                  'Pozwala użytkownikom złożyć zamówienie na podstawie zawartości koszyka, podając dane do wysyłki i wybierając metodę płatności.',
              },
              {
                title: 'Historia zamówień',
                description:
                  'Wyświetla pełną historię zamówień złożonych przez użytkownika, wraz ze szczegółami produktów, datami oraz statusem realizacji.',
              },
              {
                title: 'Opcje filtrowania',
                description:
                  'Umożliwia filtrowanie produktów według kategorii, ceny, dostępności lub innych parametrów, ułatwiając szybkie znalezienie potrzebnych produktów.',
              },
              {
                title: 'Sortowanie produktów',
                description:
                  'Pozwala sortować produkty według nazwy, ceny lub popularności w kolejności rosnącej lub malejącej, co ułatwia szybkie porównanie i wybór produktów.',
              },
              {
                title: 'Responsywny design',
                description:
                  'Zapewnia przyjazny interfejs, który dostosowuje się do różnych rozmiarów ekranów i urządzeń – od komputerów stacjonarnych, przez tablety, po smartfony.',
              },
            ],
          },
          admin: {
            title: 'Po stronie administratora',
            features: [
              {
                title: 'Zarządzanie zamówieniami',
                description:
                  'Administratorzy mogą przeglądać i zarządzać wszystkimi zamówieniami klientów.',
              },
              {
                title: 'Aktualizacja statusu zamówienia',
                description:
                  'Administratorzy mogą zmieniać status zamówienia (np. „W przygotowaniu”, „Wysłane”, „Dostarczone”, „Zwrócone”).',
              },
            ],
          },
          technicalDetails: {
            title: 'Szczegóły techniczne',
            features: [
              {
                title: 'Backend',
                description:
                  'json-server symuluje REST API do przechowywania i pobierania danych o produktach, użytkownikach i zamówieniach.',
              },
              {
                title: 'Frontend',
                description:
                  'TypeScript jest używany do ścisłego typowania i walidacji danych, co zapewnia integralność danych i minimalizuje błędy.',
              },
              {
                title: 'Rozdzielenie części użytkownika i administratora',
                description:
                  'Interfejs użytkownika i administratora są oddzielone plikami index.html (dla użytkowników) i admin.html (dla administratorów), co zapewnia wyraźne granice między tymi sekcjami.',
              },
            ],
          },
          validationAndTypes: {
            title: 'Walidacja i typy',
            features: [
              {
                title: 'Walidacja danych',
                description:
                  'Wszystkie dane wprowadzane przez użytkownika oraz interakcje z API są walidowane, aby zapewnić spójność i bezpieczeństwo.',
              },
              {
                title: 'Typy',
                description:
                  'TypeScript jest używany w całym projekcie, z zdefiniowanymi typami dla użytkowników, produktów i zamówień, aby zapobiegać przekazywaniu niepoprawnych danych.',
              },
            ],
          },
          technologies: ['TypeScript', 'Vite', 'json-server'],
        },
      },
    },

    'hall-reservation': {
      id: 'hall-reservation',
      label: 'Hall Reservation',
      background: shopTsPart1,
      images: [shopTsImage],
      link: {
        href: 'https://github.com/AgnieszkaDra/Hall-Reservation',
        label: 'View project',
        external: true,
      },
      description:
        'A hall reservation system built in pure TypeScript using OOP principles, focused on scalability and maintainability.',
      tags: ['TypeScript', 'OOP'],
    },
  },
}

export default projects