import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Galerie from '@/components/Galerie';
import Destination from '@/components/Destination';
import Appartement from '@/components/Appartement';
import Prestations from '@/components/Prestations';
import ArtDeVivre from '@/components/ArtDeVivre';
import Services from '@/components/Services';
import Fiscalite from '@/components/Fiscalite';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <Introduction />
            <Galerie />
            <Destination />
            <Appartement />
            <Prestations />
            <ArtDeVivre />
            <Services />
            <Fiscalite />
            <Contact />
        </>
    );
}
