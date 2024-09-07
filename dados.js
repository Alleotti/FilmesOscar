let filmes = [
    {
        titulo: 'Avatar O Caminho da Água',
        sinopse: 'Anos após os eventos do primeiro filme, Jake Sully e Neytiri formaram uma família e vivem em paz na Pandora. No entanto, essa paz é ameaçada quando a humanidade retorna, forçando a família a deixar seu lar e explorar novas regiões do planeta.',
        diretor: 'James Cameron',
        elenco: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Stephen Lang'],
        indicacoes: [
            'Melhor Filme',
            'Melhores Efeitos Visuais',
            'Melhor Direção de Arte',
            'Melhor Som',
            'Melhor Edição de Som'
        ],
        premios: [
            'Melhor Efeitos Visuais'
        ],
        link: "https://www.imdb.com/title/tt1630029/"
    },
    {
        titulo: 'Tudo em Todo Lugar ao Mesmo Tempo',
        sinopse: 'Uma aventura multiversal que acompanha uma imigrante chinesa que precisa salvar o multiverso ao conectar com versões alternativas de si mesma.',
        diretor: 'Daniel Kwan e Daniel Scheinert',
        elenco: ['Michelle Yeoh', 'Ke Huy Quan', 'Stephanie Hsu'],
        indicacoes: [
            'Melhor Filme',
            'Melhor Diretor',
            'Melhor Atriz (Michelle Yeoh)',
            'Melhor Ator Coadjuvante (Ke Huy Quan)',
            'Melhor Atriz Coadjuvante (Jamie Lee Curtis)',
            'Melhor Roteiro Original' 

        ],
        premios: [
            'Melhor Filme',
            'Melhor Diretor',
            'Melhor Atriz (Michelle Yeoh)',
            'Melhor Ator Coadjuvante (Ke Huy Quan)',
            'Melhor Atriz Coadjuvante (Jamie Lee Curtis)',
            'Melhor Roteiro Original'

        ],
        link:"https://www.imdb.com/title/tt6710474/"
    },
    {
        titulo: 'Elvis',
        sinopse: 'Um drama musical biográfico que narra a vida e a carreira de Elvis Presley, desde sua ascensão à fama até sua morte prematura. O filme explora a complexa relação de Elvis com seu empresário, Colonel Tom Parker.',
        diretor: 'Baz Luhrmann',
        elenco: ['Austin Butler', 'Tom Hanks'],
        indicacoes: ['Melhor Filme', 'Melhor Ator (Austin Butler)', 'Melhor Figurino'],
        premios: ['Melhor Ator (Austin Butler)'],
        link:"https://www.imdb.com/title/tt3704428/"
    },
    {
        titulo: 'Os Banshees de Inisherin',
        sinopse: 'Ambientada em uma ilha remota na Irlanda, a história gira em torno da amizade de longa data entre dois homens que se desfaz de repente, levando a consequências devastadoras para ambos.',
        diretor: 'Martin McDonagh',
        elenco: ['Colin Farrell', 'Brendan Gleeson', 'Kerry Condon'],
        indicacoes: ['Melhor Filme', 'Melhor Diretor', 'Melhor Roteiro Original', 'Melhor Ator (Colin Farrell)', 'Melhor Ator Coadjuvante (Brendan Gleeson, Barry Keoghan)', 'Melhor Atriz Coadjuvante (Kerry Condon)', 'Melhor Trilha Sonora'],
        premios: ['Melhor Roteiro Original'],
        link:"https://www.imdb.com/title/tt11813216/"
    },
    {
        titulo: 'Tár',
        sinopse: 'Um drama psicológico que acompanha a vida de Lydia Tár, uma renomada maestrina que enfrenta uma crise profissional e pessoal.',
        diretor: 'Todd Field',
        elenco: ['Cate Blanchett', 'Nina Hoss'],
        indicacoes: ['Melhor Filme', 'Melhor Diretor', 'Melhor Atriz (Cate Blanchett)', 'Melhor Roteiro Original'],
        premios: [],
        link:"https://www.imdb.com/title/tt14444726/"
    },
    {
        titulo: 'Entre Mulheres',
    sinopse: 'Em uma colônia religiosa isolada, um grupo de mulheres menonitas se reúne para decidir seu futuro após descobrirem que foram sistematicamente drogadas e abusadas pelos homens da comunidade.',
    diretor: 'Sarah Polley',
    elenco: ['Rooney Mara', 'Claire Foy', 'Jessie Buckley', 'Judith Ivey'],
    indicacoes: [
        'Melhor Filme', // Embora não tenha vencido, foi indicado
        'Melhor Roteiro Adaptado'
    ],
    premios: [
        'Melhor Roteiro Adaptado'],
        link:"https://www.imdb.com/title/tt13669038/"
    },
    {
        titulo: 'Nada de Novo no Front',
        sinopse: 'Um jovem soldado alemão luta para sobreviver na Primeira Guerra Mundial e questiona o sentido da guerra.',
        diretor: 'Edward Berger',
        elenco: ['Felix Kammerer', 'Albrecht Schuch'],
        indicacoes: ['Melhor Filme Internacional', 'Melhor Cinematografia', 'Melhor Som', 'Melhor Direção de Arte'],
        premios: ['Melhor Filme Internacional'],
        link:"https://www.imdb.com/title/tt1016150/"
    },
    {
        titulo: 'Os Fabelmans',
        sinopse: 'Uma história semi-autobiográfica sobre a infância e a juventude de Steven Spielberg, explorando sua paixão pelo cinema.',
        diretor: 'Steven Spielberg',
        elenco: ['Michelle Williams', 'Paul Dano', 'Gabriel LaBelle'],
        indicacoes: ['Melhor Filme', 'Melhor Diretor', 'Melhor Atriz (Michelle Williams)', 'Melhor Ator Coadjuvante (Paul Dano)'],
        premios: [],
        link:"https://www.imdb.com/title/tt14208870/"
    },
    {
        titulo: 'Top Gun: Maverick',
        sinopse: 'Mais de 30 anos após o filme original, Maverick retorna como um instrutor de elite para treinar uma nova geração de pilotos.',
        diretor: 'Joseph Kosinski',
        elenco: ['Tom Cruise', 'Miles Teller'],
        indicacoes: ['Melhor Filme', 'Melhor Ator (Tom Cruise)', 'Melhor Som'],
        premios: ['Melhor Som'],
        link:"https://www.imdb.com/title/tt1745960/"
    },
    {
        titulo: 'Triângulo da Tristeza',
        sinopse: 'Uma sátira social que satiriza a sociedade capitalista através da história de um cruzeiro de luxo que naufraga.',
        diretor: 'Ruben Östlund',
        elenco: ['Harris Dickinson', 'Charlbi Dean', 'Woody Harrelson'],
        indicacoes: ['Melhor Filme', 'Melhor Diretor', 'Melhor Roteiro Original'],
        premios: ['Melhor Roteiro Original'],
        link:"https://www.imdb.com/title/tt7322224/"
    },
    {
        titulo: 'Blonde',
        sinopse: 'Uma ficção biográfica que explora a vida conturbada de Marilyn Monroe, desde sua infância até sua morte.',
        diretor: 'Andrew Dominik',
        elenco: ['Ana de Armas'],
        indicacoes: ['Melhor Atriz (Ana de Armas)', 'Melhor Maquiagem e Penteado'],
        premios: [],
        link:"https://www.imdb.com/title/tt1655389/"
    },
    {
        titulo: 'The Whale',
        sinopse: 'Um professor de inglês obeso se isola em sua casa e tenta reconectar-se com sua filha adolescente.',
        diretor: 'Darren Aronofsky',
        elenco: ['Brendan Fraser', 'Sadie Sink', 'Hong Chau'],
        indicacoes: [
            'Melhor Ator (Brendan Fraser)'
        ],
        premios: [
            'Melhor Ator (Brendan Fraser)'
        ],
        link: 'https://www.imdb.com/title/tt13833688/'
    }
];
var oscar2023 = [
    // Melhor Filme
    {
        categoria: 'Melhor Filme',
        indicados: ['Nada de Novo no Front', 'Avatar: O Caminho da Água', 'Os Banshees de Inisherin', 'Elvis', 'Tudo em Todo o Lugar Ao Mesmo Tempo', 'Os Fabelmans', 'Tár', 'Top Gun: Maverick', 'Triângulo da Tristeza','Entre Mulheres'],
        vencedor: 'Tudo em Todo Lugar Ao Mesmo Tempo'
    },
    // Melhor Direção
    {
        categoria: 'Melhor Direção',
        indicados: ['Martin McDonagh (Os Banshees de Inisherin)', 'Daniel Kwan e Daniel Scheinert (Tudo em Todo o Lugar Ao Mesmo Tempo)', 'Steven Spielberg (Os Fabelmans)', 'Todd Field (Tár)', 'Ruben Östlund (Triângulo da Tristeza)'],
        vencedor: 'Daniel Kwan e Daniel Scheinert (Tudo em Todo Lugar Ao Mesmo Tempo)'
    },

    // Melhor Ator
    {
        categoria: 'Melhor Ator',
        indicados: ['Austin Butler (Elvis)', 'Colin Farrell (Os Banshees de Inisherin)', 'Brendan Fraser (A Baleia)', 'Paul Mescal (Aftersun)', 'Bill Nighy (Living)'],   

        vencedor: 'Brendan Fraser (A Baleia)'
    },
    // Melhor Atriz
    {
        categoria: 'Melhor Atriz',
        indicados: ['Cate Blanchett (Tár)', 'Ana de Armas (Blonde)', 'Andrea Riseborough (To Leslie)', 'Michelle Williams (Os Fabelmans)', 'Michelle Yeoh (Tudo em Todo o Lugar Ao Mesmo Tempo)'],
        vencedor: 'Michelle Yeoh (Tudo em Todo Lugar Ao Mesmo Tempo)'
    },
    // Melhor Ator Coadjuvante
    {
        categoria: 'Melhor Ator Coadjuvante',
        indicados: ['Brendan Gleeson (Os Banshees de Inisherin)', 'Brian Tyree Henry (Passagem)', 'Judd Hirsch (Os Fabelmans)', 'Barry Keoghan (Os Banshees de Inisherin)', 'Ke Huy Quan (Tudo em Todo Lugar Ao Mesmo Tempo)'],
        vencedor: 'Ke Huy Quan (Tudo em Todo Lugar Ao Mesmo Tempo)'
    },
    // Melhor Atriz Coadjuvante
    {
        categoria: 'Melhor Atriz Coadjuvante',
        indicados: ['Angela Bassett (Pantera Negra: Wakanda Para Sempre)', 'Hong Chau (A Baleia)', 'Kerry Condon (Os Banshees de Inisherin)', 'Jamie Lee Curtis (Tudo em Todo Lugar Ao Mesmo Tempo)',   
 'Stephanie Hsu (Tudo em Todo Lugar Ao Mesmo Tempo)'],
        vencedor: 'Jamie Lee Curtis (Tudo em Todo Lugar Ao Mesmo Tempo)'
    },
    // Melhor Roteiro Original
    {
        categoria: 'Melhor Roteiro Original',
        indicados: ['Os Banshees de Inisherin', 'Tudo em Todo Lugar Ao Mesmo Tempo', 'Os Fabelmans', 'Tár', 'Triângulo da Tristeza'],
        vencedor: 'Tudo em Todo Lugar Ao Mesmo Tempo'
    },
    // Melhor Roteiro Adaptado
    {
        categoria: 'Melhor Roteiro Adaptado',
        indicados: ['Nada de Novo no Front', 'Glass Onion: Um Mistério Knives Out', 'Living', 'Top Gun: Maverick', 'Entre Mulheres'],
        vencedor: 'Nada de Novo no Front'
    },
    // Melhor Filme Internacional
    {
        categoria: 'Melhor Filme Internacional',
        indicados: ['Nada de Novo no Front (Alemanha)', 'Argentina, 1985 (Argentina)', 'Close (Bélgica)', 'EO (Polônia)', 'The Quiet Girl (Irlanda)'],
        vencedor: 'Nada de Novo no Front (Alemanha)'
    },
    // Melhor Filme de Animação
    {
        categoria: 'Melhor Filme de Animação',
        indicados: ['Pinóquio por Guillermo del Toro', 'Marcel the Shell with Shoes On', 'Gato de Botas 2: O Último Pedido', 'A Fera do Mar', 'Red: Crescer é uma Fera'],   

        vencedor: 'Pinóquio por Guillermo del Toro'
    },
    // Melhor Curta-Metragem Animado
    {
        categoria: 'Melhor Curta-Metragem Animado',
        indicados: ['The Boy, The Mole, The Fox and the Horse', 'The Flying Sailor', 'Ice Merchants', 'My Year of Dicks', 'An Ostrich Told Me The World is Fake and I Think I Believed It'],
        vencedor: 'The Boy, The Mole, The Fox and the Horse'},
    // Melhor Figurino
    {
        categoria: 'Melhor Figurino',
        indicados: ['Babilônia', 'Pantera Negra: Wakanda Para Sempre', 'Elvis', 'Tudo em Todo Lugar Ao Mesmo Tempo', 'Sra. Harris vai a Paris'],
        vencedor: 'Pantera Negra: Wakanda Para Sempre'
    },
    // Melhor Design de Produção
    {
        categoria: 'Melhor Design de Produção',
        indicados: ['Nada de Novo no Front', 'Avatar: O Caminho da Água', 'Babilônia', 'Elvis', 'Os Fabelmans'],
        vencedor: 'Nada de Novo no Front'
    },
    // Melhor Som
    {
        categoria: 'Melhor Som',
        indicados: ['Nada de Novo no Front', 'Avatar: O Caminho da Água', 'Batman', 'Elvis', 'Top Gun: Maverick'],
        vencedor: 'Top Gun: Maverick'
    },
    {
        categoria: 'Melhor Maquiagem e Penteados',
        indicados: ['Nada de Novo no Front', 'Batman', 'Pantera Negra: Wakanda Para Sempre', 'Elvis', 'A Baleia'],
        vencedor: 'A Baleia'
    },
    // Melhores Efeitos Visuais
    {
        categoria: 'Melhores Efeitos Visuais',
        indicados: ['Nada de Novo no Front', 'Avatar: O Caminho da Água', 'Batman', 'Pantera Negra: Wakanda Para Sempre', 'Top Gun: Maverick'],
        vencedor: 'Avatar: O Caminho da Água'
    },
    
        // Melhor Direção de Fotografia
        {
            categoria: 'Melhor Direção de Fotografia',
            indicados: ['Nada de Novo no Front', 'Bardo, Falsa Crônica de Algumas Verdades', 'Elvis', 'Império da Luz', 'Tár'],
            vencedor: 'Nada de Novo no Front'
        },
        // Melhor Edição
        {
            categoria: 'Melhor Edição',
            indicados: ['Os Banshees de Inisherin', 'Elvis', 'Tudo em Todo Lugar Ao Mesmo Tempo', 'Tár', 'Top Gun: Maverick'],
            vencedor: 'Tudo em Todo Lugar Ao Mesmo Tempo'
        },
        // Melhor Trilha Sonora Original
        {
            categoria: 'Melhor Trilha Sonora Original',
            indicados: ['Nada de Novo no Front', 'Babilônia', 'Os Banshees de Inisherin', 'Tudo em Todo Lugar Ao Mesmo Tempo', 'Os Fabelmans'],
            vencedor: 'Nada de Novo no Front'
        }]