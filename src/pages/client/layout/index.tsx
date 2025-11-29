import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(" absolute left-0 right-0")}
      >
        <Outlet />
        <Footer />

      </motion.main>
    </div>
  );
};

export default Layout;