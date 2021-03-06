module.exports = {
    // ogni bottone รจ chiamato con il nome del pannello a cui indirizza la navigazione

    /*          ADMINS          */

    pannello_admin: {
        text: '๐ต๏ธโโ๏ธ Admin MODE ๐ต๏ธโโ๏ธ',
        callback_data: 'PANNELLO_ADMIN'
    },
    avvia_backup_film: {
        text: 'โผ๏ธ Backup FILM โผ๏ธ',
        callback_data: 'BACKUP_FILM'
    },
    backup_film_pubblico: {
        text: 'โผ๏ธ Backup FILM PUBBLICO โผ๏ธ',
        callback_data: 'BACKUP_FILM_PUBBLICO'
    },
    avvia_backup_serie: {
        text: 'โผ๏ธ Backup SERIE โผ๏ธ',
        callback_data: 'BACKUP_SERIE'
    },
    backup_serie_pubblico: {
        text: 'โผ๏ธ Backup SERIE PUBBLICO โผ๏ธ',
        callback_data: 'BACKUP_SERIE_PUBBLICO'
    },
    fine_gestione_utente: { 
        text: 'โ ok โ',
        callback_data: 'PANNELLO_GESTIONE_UTENTI'
    },
    cambia_stato_richieste (stato_corrente) {
        if (stato_corrente) {
            return {
                text: '๐ซ Chiudi richieste ๐ซ',
                callback_data: 'CHIUDI_RICHIESTE'
            }
        } else {
            return {
                text: '๐ญ Apri richieste ๐ญ',
                callback_data: 'APRI_RICHIESTE'
            }
        }
        
    },
    pannello_aggiungi_film: {
        text: 'โ Aggiungi Film โ',
        callback_data: 'PANNELLO_AGGIUNGI_FILM'
    },
    pannello_aggiungi_serie: {
        text: 'โ Aggiungi Serie โ',
        callback_data: 'PANNELLO_AGGIUNGI_SERIE'
    },
    pannello_elimina_film: {
        text: 'โ Elimina Film โ',
        callback_data: 'PANNELLO_ELIMINA_FILM'
    },
    pannello_elimina_serie: {
        text: 'โ Elimina Serie โ',
        callback_data: 'PANNELLO_ELIMINA_SERIE'
    },

    crea_locandina: { 
        text: "๐ Crea locandina ๐",
        callback_data: 'PANNELLO_CREA_LOCANDINA'
    },
    crea_locandina_serie: { 
        text: "๐ Crea locandina ๐",
        callback_data: 'PANNELLO_CREA_LOCANDINA_SERIE'
    },

    elimina_film(movie_id) {
        return {
            text: 'โ Elimina Film โ',
            callback_data: 'ELIMINA_FILM: ' + movie_id
        }
    },
    elimina_serie(serie_id) {
        return {
            text: 'โ Elimina Serie โ',
            callback_data: 'ELIMINA_SERIE: ' + serie_id
        }
    },

    /*           UTENTI - FILM          */

    pannello_HOME: {
        text: '๐? Torna alla home ๐?',
        callback_data: 'PANNELLO_BENVENUTO'
    },
    pannello_film: {
        text: "๐ฟ Film ๐ฟ",
        callback_data: 'PANNELLO_FILM'
    },
    pannello_ricerca_film_titolo: {
        text: "๐ Titolo ๐",
        callback_data: 'PANNELLO_RICERCA_FILM_TITOLO'
    },
    pannello_ricerca_film_genere: {
        text: "๐ Genere ๐",
        callback_data: 'PANNELLO_RICERCA_FILM_GENERE'
    },
    pannello_ricerca_film_lettera: {
        text: "๐? A - Z ๐?",
        callback_data: 'PANNELLO_RICERCA_FILM_LETTERA'
    },
    pannello_ricerca_film_anno: {
        text: "๐ Anno ๐",
        callback_data: 'PANNELLO_RICERCA_FILM_ANNO'
    },
    pannello_risultati_film_piรน_votati: {
        text: "โญ๏ธ Piรน votati โญ๏ธ",
        callback_data: 'RISULTATI_FILM_PIร_VOTATI'
    },
    pannello_risultati_film_random: {
        text: "๐ฒ Random ๐ฒ",
        callback_data: 'RISULTATI_FILM_RANDOM'
    },
    pannello_file_film: {
        text: "๐ฟ Guarda Film ๐ฟ",
        callback_data: 'PANNELLO_FILE_FILM'
    },

    /*          UTENTI - SERIE TV           */

    pannello_serie_tv: {
        text: "๐บ Serie tv ๐บ",
        callback_data: 'PANNELLO_SERIE_TV'
    },
    pannello_ricerca_serie_titolo: {
        text: "๐ Titolo ๐",
        callback_data: 'PANNELLO_RICERCA_SERIE_TITOLO'
    },
    pannello_ricerca_serie_genere: {
        text: "๐ Genere ๐",
        callback_data: 'PANNELLO_RICERCA_SERIE_GENERE'
    },
    pannello_ricerca_serie_lettera: {
        text: "๐? A - Z ๐?",
        callback_data: 'PANNELLO_RICERCA_SERIE_LETTERA'
    },
    pannello_ricerca_serie_anno: {
        text: "๐ Anno ๐",
        callback_data: 'PANNELLO_RICERCA_SERIE_ANNO'
    },
    pannello_risultati_serie_piรน_votate: {
        text: "โญ๏ธ Piรน votati โญ๏ธ",
        callback_data: 'RISULTATI_SERIE_PIร_VOTATE'
    },
    pannello_risultati_serie_random: {
        text: "๐ฒ Random ๐ฒ",
        callback_data: 'RISULTATI_SERIE_RANDOM'
    },
    pannello_file_serie: {
        text: "๐ฟ Guarda Serie ๐ฟ",
        callback_data: 'PANNELLO_FILE_SERIE'
    },

    /*          UTENTI - RICHIESTE           */

    pannello_richieste_film: {
        text: "๐จ Richiedi Film ๐จ",
        callback_data: 'PANNELLO_RICHIESTE'
    },

    pannello_richieste_serie: {
        text: "๐จ Richiedi Serie ๐จ",
        callback_data: 'PANNELLO_RICHIESTA_SERIE'
    },

    pannello_richieste: {
        text: "๐จ  Richieste  ๐จ",
        callback_data: 'PANNELLO_RICHIESTE'
    },

    richiedi_film: {
        text: "๐ฌ Film ๐ฌ",
        callback_data: 'PANNELLO_RICHIESTA_FILM'
    },

    richiedi_film_sub_ita: {
        text: "๐บ๐ธ  Film [SUB-ITA] ๐ฏ๐ต",
        callback_data: 'PANNELLO_RICHIESTA_FILM_SUB_ITA'
    },

    richiedi_serie: {
        text: "๐บ Serie tv ๐บ",
        callback_data: 'PANNELLO_RICHIESTA_SERIE'
    },


    indietro (callback_data) {
        return {
            text: "๐ Indietro ๐",
            callback_data: callback_data
        }
    }
}

