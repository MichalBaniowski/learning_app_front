import LocalizedStrings from 'react-localization'

let messages = new LocalizedStrings({
    pl: {
        fetchingError: 'Ups coś poszło nie tak',
        notFoundError: "Strona nie została odnaleziona"
    },
    en: {
        fetchingError: 'Oups something went wrong',
        notFoundError: 'Page not found'
    }
});

export default messages;