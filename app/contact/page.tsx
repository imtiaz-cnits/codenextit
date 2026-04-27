import ContactContent from '../../components/contact/ContactContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | CodeNext Information Tech',
  description: 'Get in touch with CodeNext IT for your next digital project. We provide expert software, web, and design solutions.',
};

export default function ContactPage() {
  return <ContactContent />;
}
