import { useEffect } from 'react';
import { Palette, Megaphone, Award, Mail} from 'lucide-react';
import { WorkCard } from './components/WorkCard';
import SpringBunny from './images/bunnies.jpg';
import Bhat from './images/bhat.jpg';
import Couple from './images/couple.jpg';
import Dog from './images/dog.jpg';
import Drawing from './images/drawing.jpg';
import Fcap from './images/fcap.jpg';
import Ghat from './images/ghat.jpg';
import Gparents from './images/grandparents.jpg';
import Grhat from './images/grhat.jpg';
import Landscape from './images/landscape.jpg';
import Margobunny from './images/margobunny.jpg';
import Mg1 from './images/mg1.jpg';
import Mg2 from './images/mg2.jpg';
import MgHoodie from './images/mghoodie.webp';
import Mglogo from './images/mglogo.jpg';
import Mgshirt from './images/mgtshirt.webp';
import Moto from './images/moto.jpg';
import Portrait from './images/portrait.jpg';
import Plakat1 from './images/plakat1.png';
import Plakat2 from './images/plakat2.png';
import Plakat3 from './images/plakat3.png';
import PostCAS from './images/postCAS.png';
import ReklamaCC from './images/CocaColaReklama.png';
import DocsCC from './images/DocsCC.png';

const works = {
  'graphic': [
    {
      title: "Cartoon Couple",
      description: "",
      imageUrl: Couple,
      category: "Graphic Works"
    },
    {
      title: "Pleasant moment",
      description: "",
      imageUrl: Portrait,
      category: "Graphic Works"
    },
    {
      title: "Spring Rabbits",
      description: "Wallpaper for laptop.",
      imageUrl: SpringBunny,
      category: "Graphic Works"
    },
    {
      title: "Artline portrait",
      description: "",
      imageUrl: Drawing,
      category: "Graphic Works"
    },
    {
      title: "Odpoczywający jamnik",
      description: "",
      imageUrl: Dog,
      category: "Graphic Works"
    },
    {
      title: "Dziadkowie",
      description: "",
      imageUrl: Gparents,
      category: "Graphic Works"
    },
    {
      title: "New Landscape",
      description: "",
      imageUrl: Landscape,
      category: "Graphic Works"
    },
    {
      title: "Królik wielkanocny - Margonem",
      description: "",
      imageUrl: Margobunny,
      category: "Graphic Works"
    },
    {
      title: "Motorcycle race",
      description: "",
      imageUrl: Moto,
      category: "Graphic Works"
    },
  ],
  'advertising': [
    {
      title: "Projekt reklamy Coca Cola",
      description: "https://youtu.be/FsDd_qm_jFU?si=8saBIEJXhcTXxohb",
      imageUrl: ReklamaCC,
      category: "Advertising Projects"
    },
    {
      title: "Dokumentacja reklamy - The Sounds of Coca-Cola",
      description: "https://docs.google.com/document/d/1BsXcCSa7uMceUxNChCGKWGtdEsO6fL7hg4VJsYPV1e0/edit?usp=sharing",
      imageUrl: DocsCC,
      category: "Advertising Projects"
    },
    {
      title: "Projekt logo - MeanGirls",
      description: "",
      imageUrl: Mg1,
      category: "Advertising Projects"
    },
    {
      title: "Projekt logo - MeanGirls",
      description: "",
      imageUrl: Mg2,
      category: "Advertising Projects"
    },
    {
      title: "Projekt logo - MeanGirls",
      description: "",
      imageUrl: Mglogo,
      category: "Advertising Projects"
    },
    {
      title: "Projekt bluzy - MeanGirls",
      description: "",
      imageUrl: MgHoodie,
      category: "Advertising Projects"
    },
    {
      title: "Projekt koszulki - MeanGirls",
      description: "",
      imageUrl: Mgshirt,
      category: "Advertising Projects"
    },
  ],
  'cas': [
    {
      title: "Projekt czapki #1",
      description: "",
      imageUrl: Bhat,
      category: "Aktywności dla CAS"
    },
    {
      title: "Projekt czapki #2",
      description: "",
      imageUrl: Ghat,
      category: "Aktywności dla CAS"
    },
    {
      title: "Projekt czapki #3",
      description: "",
      imageUrl: Fcap,
      category: "Aktywności dla CAS"
    },
    {
      title: "Projekt czapki #4",
      description: "",
      imageUrl: Grhat,
      category: "Aktywności dla CAS"
    },
    {
      title: "Plakat #1",
      description: "",
      imageUrl: Plakat1,
      category: "Aktywności dla CAS"
    },
    {
      title: "Plakat #2",
      description: "",
      imageUrl: Plakat2,
      category: "Aktywności dla CAS"
    },
    {
      title: "Plakat #3",
      description: "",
      imageUrl: Plakat3,
      category: "Aktywności dla CAS"
    },
    {
      title: "Post CAS",
      description: "Post o nowym asortymiencie i zniżce dla klientów Centrum Aktywności Społeczniej.",
      imageUrl: PostCAS,
      category: "Aktywności dla CAS"
    },

  ]
};

function App() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href) {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-40 border-b">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h2 className={"text-2xl font-bold mb-8 text-gray-700 mb-0"}>Klaudia Czarnuch</h2>
              </div>
              <div className="flex space-x-8">
                <a
                    href="#graphic"
                    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Palette className="w-4 h-4" />
                  <span className={'spanTitle'}>Prace graficzne</span>
                </a>
                <a
                    href="#advertising"
                    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Megaphone className="w-4 h-4" />
                  <span className={'spanTitle'}>Projekty reklamowe</span>
                </a>
                <a
                    href="#cas"
                    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Award className="w-4 h-4" />
                  <span className={'spanTitle'}>Aktywności CAS</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="max-w-6xl mx-auto px-4 pt-24 pb-32">
            {Object.entries(works).map(([category, items]) => (
                <section key={category} id={category} className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">
                    {category === 'graphic' && 'Prace Graficzne'}
                    {category === 'advertising' && 'Projekty Reklamowe'}
                    {category === 'cas' && 'Aktywności CAS'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((work, index) => (
                        <WorkCard key={index} {...work} />
                    ))}
                  </div>
                </section>
            ))}
          </div>
        </main>

        {/* Sticky Footer */}
        <footer className="sticky bottom-0 bg-white border-t">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <a href="mailto:czarnuchklaudia6@gmail.com" className="hover:text-blue-600 transition-colors">
                czarnuchklaudia6@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;