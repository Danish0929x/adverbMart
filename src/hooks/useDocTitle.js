import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - CRYPTOGRAPHY MART`;
        } else {
            document.title = 'CRYPTOGRAPHY MART | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
