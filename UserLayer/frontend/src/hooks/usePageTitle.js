import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function usePageTitle(title) {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = title || location.pathname.substring(1) || 'NFT Immutable';
    document.title = `${pageTitle} - NFT Immutable`;
  }, [title, location]);
}

export default usePageTitle;