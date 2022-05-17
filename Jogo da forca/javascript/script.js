var listaDinamica = [];

var palavraSorteada;
var palavraCategoria;

var tentativas = 6;


//palavras que podem aparecer no jogo
var palavras = [
    palavra01 = {
        nome: "BRASIL",
        categoria: "PAÍS",
        curiosidade: "   Seu nome oficial na verdade é República Federativa do Brasil, além de que Brasil significa “vermelho como brasa”, assim como a sua origem vem da árvore Pau Brasil, que possui a cor avermelhada. E uma das curiosidades sobre o Brasil que quase ninguém conhece é que a cerca de 100 anos atrás o nosso país se chamava Estados Unidos do Brasil."
    },
    palavra02 = {
        nome: "EGITO",
        categoria: "PAÍS",
        curiosidade: "   Reverenciados como criaturas divinas, capazes de trazer boa sorte, os gatos ganhavam estátuas e até joias no Antigo Egito. Uma provável razão para essa afeição aos felinos foi seu valor para garantir o sustento dos egípcios. Afinal, eles combatiam os ratos que infestavam a região, evitando a destruição das colheitas de grãos e cereais."
    },
    palavra03 = {
        nome: "MARROCOS",
        categoria: "PAÍS",
        curiosidade: "   No Marrocos neva, quem imaginaria que o mesmo país que abriga o maior deserto do mundo, o Saara, também contaria com tempestades de neve."
    },
    palavra04 = {
        nome: "SENEGAL",
        categoria: "PAÍS",
        curiosidade: "   Na região norte do país existe um lado rosa brilhante, chamadi Kac Retba. A coloração rosada acontece principalmente nos períodos de sexa. Por lá existem diversas algas que produzem caroenoides, atingindo maior nível de salinidade do que nos oceanos. É um local quente, possibilitando a libertação de betacaroteno, dando cor ao lago."
    },
    palavra05 = {
        nome: "HOLANDA",
        categoria: "PAÍS",
        curiosidade: "   A população holandesa é uma das mais altas do mundo. A média de altura entre os homens é de 1,84m, e das mulheres, 1,78m. Mas parece que mais ou menos um século atrás não era assim. Na Holanda, é possível ver locais com portas e tetos com tamanho bem reduzido, o que indica que o povo era bem menor. "
    },
    palavra06 = {
        nome: "ALEMANHA",
        categoria: "PAÍS",
        curiosidade: "   A famosa Autobahn é a autoestrada alemã e, longe das zonas urbanas, não há limite de velocidade. Os motoristas mais apressados atingem facilmente os 200 km/h sem medo de levar multa."
    },
    palavra07 = {
        nome: "ARGENTINA",
        categoria: "PAÍS",
        curiosidade: "   Um aspecto marcante da cultura argentina é a leitura: se você gosta de livros e consegue entender um pouquinho de espanhol, vai adorar visitar as livrarias de Buenos Aires. De acordo com um relatório do Fórum Cultural das Cidades Mundiais de 2015, a capital argentina possui mais livrarias per capita do que qualquer outra capital do mundo."
    },
    palavra08 = {
        nome: "ITALIA",
        categoria: "PAÍS",
        curiosidade: "   A Itália é o país com maior número de vulcões da Europa e também de praias: são mais de 7.400 quilômetros de costa litorânea, além de 27 parques marinhos. O maior vulcão em território italiano é o Mt. Etna, localizado na Sicília, e é o segundo mais ativo do mundo, atrás apenas do Mauna Loa, no Havaí, Estados Unidos."
    },
    palavra09 = {
        nome: "TURQUIA",
        categoria: "PAÍS",
        curiosidade: "   Em praticamente qualquer cidade que você visite na Turquia é possível encontrar um ou mais castelos. Eles têm diversos tamanhos, belezas e histórias. Transformados em sua maioria em atração turística, essas fortalezas foram criadas pelos exércitos para se defenderem de invasores e foram construídos principalmente durante o Império Bizantino e Otomano."
    },
    palavra10 = {
        nome: "NEYMAR",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   Ao longo da carreira, o craque ja marcou cerca de 462 gols, sendo 71 deles na seleção brasileira (6 a menos que o maior artilheiro Pelé com 77gols), mas um fato curioso é que Neymar é o dono do gol mais rápido da história das Olimpíadas, com 14 segundos. O efeito aconteceu em 2016 aqui no Brasil, na época o jogo era contra a Honduras OBS: eu lembro desse gol kkkkkkk"
    },
    palavra11 = {
        nome: "MESSI",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   Curiosamente, o primeiro contrato de Lionel Messi com o Barcelona foi assinado num guardanapo que era o único pedaço de papel disponível na época. Isso aconteceu em 14 de dezembro de 2000, quando o diretor desportivo do Barcelona, ​​Carles Rexach, realizou uma reunião com o pai de Lionel Messi  para determinar o futuro do jovem."
    },
    palavra12 = {
        nome: "KROOS",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   Na época escolar, na educação física o talento dele era tão gritante ao comparado aos outros que o treinador obrigava toni a jogar descalço para se igualar ao resto. Isso foi informado pelo próprio Kross, eu psquisei kkkkk"
    },
    palavra13 = {
        nome: "MBAPPE",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   Sua transferência permanente ao PSG em 2018 custou 210 milhões de dólares - a transferência mais cara de um adolescente na história. Ele foi o jogador francês mais jovem a marcar um gol em Copa do Mundo. Foi artilheiro da Ligue 1 em duas temporadas, além de Jogador do Ano em 2019 em mais recentemente em 2022."
    },
    palavra14 = {
        nome: "HAALAND",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   Quantos gols você já viu alguém marcar em uma única partida e que tal nove de uma vez? Esta foi a marca histórica de Haaland, que simplesmente acabou com o jogo da Noruega contra Honduras no Mundial sub-20, em 2019. Ele balançou as redes nove vezes e o confronto terminou 12 a 0 para os europeus."
    },
    palavra15 = {
        nome: "LEWANDOSKI",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   O esporte vem de família, o pai de Lewandowski, Krzysztof, morreu em 2005, mesmo ano da estreia do atacante no futebol profissional. Krzysztof foi campeão nacional de judô e também jogou futebol na segunda divisão polonesa. A mãe do atacante, Iwona, jogava voleibol profissional, assim como a irmã, Milena."
    },
    palavra16 = {
        nome: "SCHWEINSTEIGER",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   Acredita que não achei nada? Só coloquei aqui pelonome ser bem dificíl"
    },
    palavra17 = {
        nome: "NEUER",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   Neuer é um jogador que combate a homofobia no futebol e defensor dos direitos das crianças e é uma causa que ele é extremamente focado, é o que levou o jogador a fundar a empresa Manuel Neuer Kids uma fundação que trabalha para ajudar crianças carentes, doentes e deficientes em Gelsenkirchen em sua cidade natal."
    },
    palavra18 = {
        nome: "SALAH",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   Na adolescência Salah treinava pelo Al Mokawloon, equipe do Cairo, capital do Egito. Porém, o jovem morava na cidade de Nagrig, a mais de quatro horas de viagem do seu clube. Para treinar, o jogador viaja cerca de nove horas, cinco vezes por semana e ainda conciliava o esporte com a escola."
    },
    palavra19 = {
        nome: "MARQUINHOS",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   Foi apresentado oficialmente como jogador do Paris Saint-Germain no dia 19 de julho de 2013, para um contrato de cinco anos, recebendo a camisa de número 5. O valor da transação do PSG com a Roma girou em torno de 31,4 milhões de euros. Logo em sua estreia marcou seu primeiro gol pelo clube na goleada por 4–1 contra o Olympiacos partida válida pela fase de grupos da Liga dos Campeões."
    },
    palavra20 = {
        nome: "COUTINHO",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade: "   Em 2013, o Liverpool surgiu como interessado no futebol do ”Pequeno Mágico”, como é conhecido, e contratou o jogador para reforçar o elenco dos Reds. O atleta obteve um status de jogador intocável no elenco inglês. As temporadas seguintes tiveram um desempenho espetacular de Coutinho. Mas a temporada de maior destaque aconteceu em 2016. Foram 36 jogos, com 14 gols marcados e nove assistências."
    },
    palavra21 = {
        nome: "BATMAN",
        categoria: "SUPER HERÓI",
        curiosidade: "   Se o nome de Gotham saiu de uma lista telefônica, o nome Bruce Wayne tem uma origem mais simbólica. Na realidade existe um fato bem interessante relacionado com a origem deste icônico nome. O primeiro nome “Bruce” foi baseado no Rei Bruce da Escócia, já o último foi inspirado em Anthony Wayne, um herói da revolução norte-americana."
    },a22 = {
        nome: "FLASH",
        categoria: "SUPER HERÓI",
        curiosidade: "   Aqui vai um pouco de física básica: tomando o conceito de que força é equivalente a massa vezes aceleração, em teoria, o Flash possui o soco mais forte do mundo, uma vez que pode acelerar de modo gigantesco. E apesar de ser um conceito explorado em algumas HQs do herói, raramente o vemos ser lembrado por isso."
    },
    palavra23 = {
        nome: "THOR",
        categoria: "SUPER HERÓI",
        curiosidade: "   Thor foi o primeiro super-herói da Marvel baseado em um deus. Para sua criação, Stan Lee – com a ajuda de Larry Lieber e Jack Kirby – se inspirou no poderoso Deus do Trovão da mitologia nórdica. Na época, o objetivo dos quadrinistas era criar algum personagem que fosse capaz de lutar e até mesmo derrotar o Hulk, um dos seres mais poderosos da editora naquele período."
    },
    palavra24 = {
        nome: "HULK",
        categoria: "SUPER HERÓI",
        curiosidade: "   O Hulk nem sempre foi verde. Inicialmente, no design original do personagem estava previsto que ele seria cinza, mas por causa de problemas de impressão, acabou saindo com uma tonalidade esverdeada na revista, por ser uma cor de mais fácil impressão na época. Com isso, a criatura acabou se tornando verde de vez, e posteriormente foi até apelidado de Gigante Esmeralda ou Golias Esmeralda. No fim, a cor combinou muito bem, principalmente por causa da expressão “Ficar verde de raiva”, que veio da França."
    },
    palavra25 = {
        nome: "AQUAMAN",
        categoria: "SUPER HERÓI",
        curiosidade: "    Aquaman pode fazer muito mais do que se comunicar com nossos amigos com escamas. Ele é capaz de controlar toda vida marinha, incluindo Tubarões Gigantes, Lulas Colossais e Baleias Assassinas. Além disso, sua telepatia também é capaz de influenciar seres não-aquáticos. Ele não pode controlar a mente de outras pessoas, mas já realizou um ataque mental tão poderoso contra o vilão Kordax, que o obrigou a se matar para acabar com o sofrimento."
    },
    palavr26 = {
        nome: "LOKI",
        categoria: "VILÃO",
        curiosidade: "   Na série Loki: Agent of Asgard, o personagem alterna entre um corpo masculino e um feminino. Mas, antes disso, após um dos Ragnaroks, Loki foi morto e, após ressuscitar, resolveu esconder sua essência no corpo de Lady Sif, para manipular uma série de eventos e tentar conquistar o trono de Asgard."
    },
    palavra27 = {
        nome: "MICHELANGELO",
        categoria: "PINTOR",
        curiosidade: "   Michelangelo pintou os afrescos no teto da Capela Sistina, não deitado como às vezes é descrito, mas de pé sobre um andaime alto, estendendo a mão e esticando o pescoço. Como ele nunca havia trabalhado em afrescos antes, trabalhou com seus assistentes em centenas de seus esboços para transferir contornos para uma superfície recém-rebocada. Para adicionar cor, Michelangelo usou a técnica buon fresco, na qual o artista pinta rapidamente em gesso molhado antes de secar. Alguns estudiosos acreditam que, para trabalhos detalhados, como o rosto de uma figura, Michelangelo provavelmente usou a técnica Secco Secco, na qual o artista pinta em uma superfície seca de gesso."
    },
    palavra28 = {
        nome: "MONALISA",
        categoria: "OBRA DE ARTE",
        curiosidade: "   Especialistas do Centro de Pesquisa e Restauração do Museu da França chegaram a conclusão de que Mona Lisa poderia estar grávida quando o quadro foi pintado. Eles descobriram, por meio de raios infravermelhos, que o pintor modificou a obra diversas vezes. A Mona Lisa inicial usava um vestido fino feito de gaze, vestimenta comum para mulheres grávidas da época."
    },
    palavra29 = {
        nome: "ARROZ",
        categoria: "COMIDA",
        curiosidade: "   Os primeiros registros históricos são da China, onde os primeiros grãos foram cultivados, no Vale do Rio Yangtzé, 13 a.C. O primeiro tipo de arroz a ser cultivado foi o arroz selvagem, e sua plantação logo se espalhou por todo o território chinês e depois por todo continente asiático, onde é até hoje a base da alimentação dessa população."
    },
    palavra30 = {
        nome: "PSG",
        categoria: "TIME",
        curiosidade: "   O PSG é um clube jovem, com apenas 50 anos de existência, é isso é pouco comparado a outros centenários do futebol,  foi criado a partir da junção de outros dois clubes franceses, e com pouco tempo já começou estava firme na liga principal do país, não muitos anos depois já começou a ganhar títulos, sendo alguns muito importantes, como o Campeonato Nacional."
    },
    palavra31 = {
        nome: "FUTEBOL",
        categoria: "ESPORTE",
        curiosidade: "   A primeira bola de futebol foi feita de couro curtido (capotão), e a câmara de ar era uma bexiga de boi. Em 1958, a bexiga deu lugar à câmara de ar de borracha, mas, em dias chuvosos, as bolas encharcavam-se, chegando a pesar o dobro. Em 1994, as bolas começaram a ficar mais leves, graças à presença de polímeros. O poliuretano foi usado como revestimento e, nas camadas internas , empregou-se o poliestireno, enquanto as câmaras eram de látex."
    },
    palavra32 = {
        nome: "VOLEIBOL",
        categoria: "ESPORTE",
        curiosidade: "   Se no Brasil o vôlei é a segunda modalidade mais praticada, no mundo esse esporte ocupa a sexta posição: são mais de 600 milhões de fãs nas Américas, Ásia, Europa e Oceania! Com mais de 120 anos de história, ela é muito conhecida por todo o mundo."
    },
    palavra33 = {
        nome: "BASQUETEBOL",
        categoria: "ESPORTE",
        curiosidade: "   A primeira partida de basquete foi realizada pelos alunos de Naismith, o inventor do basquete, porém não se tem registro da data em que ocorreu. O que se sabe é que este jogo histórico foi disputado em dezembro de 1891."
    },
    palavra34 = {
        nome: "BEISEBAL",
        categoria: "ESPORTE",
        curiosidade: "   No Brasil, já são mais de 30.000 praticantes em 120 times, participando de cerca de 55 campeonatos nacionais e internacionais por ano."
    },
    palavra35 = {
        nome: "RUGBY",
        categoria: "ESPORTE",
        curiosidade: "   Os Estados Unidos são os reinantes, os grandes campeões do rugby -  mas só quando se trata de Olimpíadas! A equipe das Águias levou a saudosa medalha de ouro quando o jogo foi praticado nas Olimpíadas de 1924. Rugby saiu do torneio depois disso. Na Olimpíadas do Rio 2016, o jogo voltará com força total, na modalidade Sevens."
    },
    palavra36 = {
        nome: "GOLFE",
        categoria: "ESPORTE",
        curiosidade: "   No treino do buraco 16 para o “The Masters 2020”, um dos quatro principais torneios do golf, o espanhol Jon Rahm fez uma tacada atravessou um lago para o acerto(o buraco em que a bola cai). O que chama a atenção é que ele usou a água a seu favor, com a bola triscando três vezes na água para ganhar amplitude até a grama, onde deslizou ao ponto histórico. Você já jogou pedrinha na água para ela quicar algumas vezes? Pois foi o que ele fez. Difícil de acreditar, né?"
    },
    palavra37 = {
        nome: "ELEFANTE",
        categoria: "ANIMAIS",
        curiosidade: "   Esses mamíferos possuem audição aguçada e podem facilmente detectar os passos de um camundongo. Suas presas pesam mais de 100 quilos. Um elefante come 125 quilos de plantas, capim e folhagens, e bebe 200 litros de água por dia. Sua tromba suga 10 litros de água de uma só vez."
    },
    palavra38 = {
        nome: "MACACO",
        categoria: "ANIMAIS",
        curiosidade: "   O macaco mais inteligente dos continentes: o macaco-prego. Eles são capazes de reconhecer seu reflexo no espelho e utilizar ferramentas ao seu favor. Caso você queira um macaquinho de estimação, esta é a espécie ideal, desde que adquiridos de criadores autorizados pelo Ibama."
    },
    palavra39 = {
        nome: "FORMIGA",
        categoria: "ANIMAIS",
        curiosidade: "   Um estudo da Universidade de Harvard descobriu que as formigas surgiram pela primeira vez durante o período Cretáceo, há cerca de 130 milhões de anos! Elas sobreviveram a explosão que extinguiu todos os dinossauros, e também sobreviveram a idade do gelo."
    },
    palavra40 = {
        nome: "COBRA",
        categoria: "ANIMAIS",
        curiosidade: "   Toda serpente produz substâncias tóxicas na boca, porém poucas têm a capacidade de injetá-las, por não possuírem dentes para isso. O veneno, misturado à saliva, só funciona na digestão dos alimentos. As cobras que conseguem injetar seu veneno são as chamadas de peçonhentas."
    },
    palavra41 = {
        nome: "ARANHA",
        categoria: "ANIMAIS",
        curiosidade: "   As aranhas praticam a reciclagem! Elas comem as próprias teias para recuperar parte da proteína utilizada para produzi-las. E você, recicla? OBS: Favor ão comer o próprio lixo assim como as aranhas, isso ão vai te ajudar a recuperar proteínas."
    },
    palavra42 = {
        nome: "GOLFINHO",
        categoria: "ANIMAIS",
        curiosidade: "   Apesar de serem muito vistos na superfície, esses mamíferos têm a capacidade de chegar até 300 metros de profundidade. Além disso, podem nadar em uma velocidade de 4 a 11 quilômetros por hora. Alguns excedem esse limite e chegam a alcançar uma velocidade de 30 quilômetros por hora."
    },
    palavra43 = {
        nome: "TIGRE",
        categoria: "ANIMAIS",
        curiosidade: "   Um fato curioso sobre os tigres é que eles possuem tanto a pele inferior, como a superior, listradas. Para você ter uma ideia, mesmo se o pelo do animal for raspado, é possível ver as listras no couro do animal devido a um forte pigmento da pele."
    },
    palavra44 = {
        nome: "URSO",
        categoria: "ANIMAIS",
        curiosidade: "   Esses animais altamente sensíveis não são apenas capazes de demonstrar felicidade, mas também tristeza e dor. Filhotes choram e gemem quando são separados de suas mães - e isso pode continuar por semanas se as mães morrerem."
    },
    palavra45 = {
        nome: "RAPOSA",
        categoria: "ANIMAIS",
        curiosidade: "   Raposas utilizam o campo magnético da Terra para caçarem. Não se sabe exatamente como funciona esse mecanismo. Elas geralmente pulam para o nordeste quando vão pegar a sua presa, pois obtém mais sucesso nessa direção. Na caçada algumas raposas podem ouvir presas que estão a 36,5 metros de distância."
    },
    palavra46 = {
        nome: "SASUKE",
        categoria: "PESONAGEM DE ANIME",
        curiosidade:"   Quando o criador de Naruto, Masashi Kishimoto inicialmente começou trabalhando na serie, ele não tinha criado Sasuke Uchiha nos primeiros rascunhos. Na verdade, Sasuke não existia no mundo de Naruto até o editor sugerir que o personagem principal necessitava de um rival com quem competir. Após receber esse conselho, Kishimoto criou Sasuke ao retirar ideias de um personagem chamado Hiei do mangá Yu Yu Hakusho. Esse herói é conhecido por ser um ninja lendário que tem agilidade de macaco e o poder de conjurar um jutsu de eletricidade."
    },
    palavra47 = {
        nome: "EREN",
        categoria: "PERSONAGEM DE ANIME",
        curiosidade:"   O nome Eren é de origem Turca Étnico-Cultural. Seu significado e descrição exatos são 'Aquele que avança' ou 'atingiu em direção à maturidade e sabedoria divina'. Ele também pode ser interpretado como um 'santo' ou 'pessoa santa'."
    },
    palavra48 = {
        nome: "GOKU",
        categoria: "PERSONAGEM DE ANIME",
        curiosidade:"   No episódio 245 de Dragon Ball Z Goku consegue chegar ao Super Sayaijin 3,mas algo que todo mundo se perguntava era o porque o cabelo do Goku cresceu na nova transformação. A resposta é bem simples,o cabelo de Goku cresceu pelo fato dele ter conseguido muito Ki (energia ou poder) durante a transformação e devido a isso a cor do cabelo muda e as sobrancelhas somem."
    },
    palavra049 = {
        nome: "KIRA",
        categoria: "PERSONAGEM DE ANIME",
        curiosidade:"   Para quem não sabe, Kira é na realidade um título atribuído a todas as pessoas que usam o Death Note com o mesmo propósito defendido por Light: matar todos os bandidos do mundo. Raito também era conhecido como L-Kira e o principal influenciador do Segundo Kira: Misa Amane, que tinha o codinome de Copycat Kira"
    },
    palavra50 = {
        nome: "FREEZA",
        categoria: "PERSONAGEM DE ANIME",
        curiosidade:"   FREEZAA, PORQUE VOCÊ MATOU O KURIRIN? EU ESTOU NERVOSO, EU ESTOU NERVOSO, FREEZZZAAAAAAAA"
    },
    palavra51 = {
        nome: "CARRO",
        categoria: "MEIO DE TRANSPORTE",
        curiosidade:"   Os acidentes acompanham a história dos carros. No Brasil, o primeiro acidente automobilístico foi causado por um célebre personagem da nossa cultura: o poeta Olavo Bilac, autor do hino à Bandeira. Em 1897, Bilac perdeu a direção e bateu contra uma árvore no Rio de Janeiro. O poeta saiu ileso, mas o veículo sofreu escoriações."
    },
    palavra52 = {
        nome: "MOTO",
        categoria: "MEIO DE TRANSPORTE",
        curiosidade:"   As motos são antigas, remetendo ao final dos anos de 1860. Mais especificamente em 1869, quando um francês e um americano inventaram, ao mesmo tempo, a motocicleta. Porém, nesta época, o primeiro modelo era ainda a vapor."
    },
    palavra53 = {
        nome: "BICICLETA",
        categoria: "MEIO DE TRANSPORTE",
        curiosidade:"   Em 1862, em Paris, foram criados caminhos especiais nos parques para os velocípedes, como eram chamadas as bicicletas daquela época; para não se misturarem as charretes e carroças, foi assim que surgiram as primeiras ciclovias."
    },
    palavra54 = {
        nome: "FIFA",
        categoria: "JOGO",
        curiosidade:"   Em 1993 a Electronic Arts publicava FIFA International Soccer, um jogo de Mega Drive que ficaria marcado como o primeiro título de simulação de times de futebol com visão isométrica. Ele também foi o primeiro jogo licenciado oficialmente pela Federação Internacional de Futebol, mas ainda não tinha permissão para usar nomes e imagens relacionados a times do mundo real."
    },
    palavra55 = {
        nome: "YODA",
        categoria: "STAR WARS",
        curiosidade:"   Frank Oz é um dos artistas principais de americanos marionetes. Responsável ele foi o responsável pelos movimentos de diversos personagens dos Muppets e acabou sendo convidado para controlar ninguém menos que Yoda mestre."
    },
    palavra56 = {
        nome: "THANOS",
        categoria: "VILÃO",
        curiosidade:"   Quando Thanos nasceu, sua mãe, Sui-san, tentou matá-lo. Durante seus anos de escola, Thanos era um pacifista e só brincava com seu irmão Eros. Devido às suas deformidades, ele se tornou uma criança taciturna, obcecado pelo conceito de morte. Como todos os Eternos, Thanos é essencialmente imortal."
    },
    palavra57 = {
        nome: "PENNYWISE",
        categoria: "VILÃO",
        curiosidade:"   O grande inimigo de A Coisa é uma tartaruga chamada de Maturin. Trata-se de uma entidade côsmica responsável pela criação de todas as coisas, enquanto que Pennywise é o senhor da destruição."
    },
    palavra58 = {
        nome: "VINGADORES",
        categoria: "FILME",
        curiosidade:"   Os Vingadores surgiram quando houve um atraso na impressão do Demolidor # 1. Stan Lee jogou um monte de heróis existentes em um time para rivalizar com a Liga da Justiça da DC."
    },
    palavra59 = {
        nome: "NEBULOSAS",
        categoria: "ESPAÇO SIDERAL",
        curiosidade:"   Nebulosas de reflexão:  São nuvens de poeira que refletem a luz da estrela mais próxima, chamada de refletora. Possuem tons azuis, pois a luz azul é espalhada mais facilmente."
    },
    palavra60 = {
        nome: "COURTOIS",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   O vôlei, já que continha pais atuantes no esporte, foi a primeira opção esportiva de Courtois. Porém, seu talento para o futebol era inegável, e ele logo trocou a quadra pelos campos. Ele também é adepto do ciclismo."
    },
    palavra61 = {
        nome: "GRIEZMAN",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Coincidência pouca é bobagem na vida de Antoine Griezmann, atacante do Atletico de Madrid e da seleção francesa. O jogador vive uma experiência especial no dia 8 de abril: a data marca, desde o ano passado, o aniversário dos três filhos do jogador, todos nascidos em anos diferentes."
    },
    palavra62 = {
        nome: "KIMMICH",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Não achei nada interessante, só que aos 18 ele já era melhor que o (ga)Rafinha."
    },
    palavra63 = {
        nome: "KEANE",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Centroavante que iniciou sua carreira profissional pelo Tottenham Hotspur em 2009. Foi premiado como Jogador Jovem do Ano na temporada 2014-2015 por ter marcado 31 gols. Fez sua estreia pela seleção inglesa em 2015 e foi artilheiro da Copa do Mundo de 2018."
    },
    palavra64 = {
        nome: "BELLINGHAM",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Jude Bellingham é o primeiro jogador a atuar em 10 partidas de UEFA Champions League antes dos 18 anos."
    },
    palavra65 = {
        nome: "DYBALA",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Ele jogou pelo clube como atacante e marcou 17 gols pelo clube em sua primeira temporada. Suas atuações começaram a atrair o interesse de treinadores de toda a Argentina e também de clubes da Europa. Em 2012 foi contactado pelo clube italiano Palermo."
    },
    palavra66 = {
        nome: "LUFFY",
        categoria: "PERSONAGEM ANIME",
        curiosidade:"   O nome Luffy veio de 'luffing' que é um termo naútico. O nome Roronoa vem de um pirata real, chamado L'Ollonais."
    },
    palavra67 = {
        nome: "INVENCIBLE",
        categoria: "ANIMAÇÃO",
        curiosidade:"   Bem, enquanto Robert Kirkman estava criando Invincible, ele também se dedicava a uma outra grande paixão: os zumbis que ele tanto tinha visto nos filmes de George Romero. Quando o autor foi contratado pela Image Comics, os diretores da editora estavam arriscando alto — para muitos era a cartada final da empresa, que estava à beira do fechamento das portas. Então, Kirkman significava “tudo ou nada” nesse cenário."
    },
    palavra68 = {
        nome: "MONKEY",
        categoria: "HIT ??? ASSASSINO DA MARVEL ",
        curiosidade:"   Por causa da violência que demonstra ao aprender as novas habilidades de luta, o macaco é banido do clã e acaba endo sua tribo ser massacrada. Furioso e determinado a vingar seu clã, o macaco agora dedica sua vida a matar a matar assassinos – sob o pseudônimo de Hit-Monkey."
    },
    palavra69 = {
        nome: "VOX",
        categoria: "THE LEGEND OF ?? MACHINA",
        curiosidade:"   Não achei nada, só posso dizer que a animação é perfeita e a parte do soco no saco kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk."
    },
    palavra70 = {
        nome: "ZEUS",
        categoria: "DEUS GREGO",
        curiosidade:"   O nome Zeus em grego antigo significava “rei divino”. Zeus era filho mais jovem do casal de titãs Cronos e Rea. Casou-se com a deusa e irmã Hera (deusa do casamento). Porém, de acordo com a mitologia grega, teve várias amantes (deusas e mortais) e vários filhos destes relacionamentos."
    },
    palavra71 = {
        nome: "SOUTH",
        categoria: "ANIMAÇÃO RUDE - ????? PARK",
        curiosidade:"   “South Park” geralmente recebe muito mais críticas do que elogios. No entanto, depois do lançamento do episódio “Le Petit Tourette” (O pequeno Tourette), a Associação da Síndrome de Tourette elogiou o programa, classificando-o como “bem pesquisado”, servindo como um meio inteligente para o público obter informações sobre a doença."
    },
    palavra72 = {
        nome: "PROGRAMADOR",
        categoria: "PROFISSÃO",
        curiosidade:"   Eu juro que uma palavra escrita errada tava calsando 32 erros, eu quase chorei..."
    },
    palavra73 = {
        nome: "ALURA",
        categoria: "ESTE É O CHALLENGE DA",
        curiosidade:"   A Alura busca sempre cultivar um espaço que garanta a saúde das(os) colaboradoras(es), então, além de benefícios corporativos voltados para o bem-estar, temos: ambiente de trabalho flexível que permite a conciliação da vida pessoal com a profissional; produzimos conteúdos semanais para toda a empresa, abordando temas relacionados à produtividade respeitando limites individuais; e temos uma liderança que visa desenvolver uma escuta ativa, sendo aliada nos momentos mais delicados."
    },
    palavra74 = {
        nome: "ISABELLE",
        categoria: "NOME DA MINHA NAMORADA",
        curiosidade:"   Ela é maravilhosa ❤"
    },
    palavra75 = {
        nome: "MODRIC",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Melhor do mundo de 2018 é meu .... KKKKKKKKKKKKKKKKKKKK"
    },
    palavra76 = {
        nome: "HENRY",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Fez chover o Arseal e torcida do Arsenal pode se considerar uma privilegiada. Não apenas pelos tantos lances geniais que presenciou de Henry, mas porque nem sempre o apaixonado tem a possibilidade de amar de novo depois que o namoro termina. No começo de 2011, assinou um contrato de dois meses com os Gunners para cobrir as ausências dos jogadores cedidos à Copa Africana de Nações, aproveitando a pausa da Major League Soccer. Reestreou contra o Leeds, na terceira rodada da FA Cup, e não só marcou, como foi decisivo na vitória por 1 a 0, retomando as noites mais mágicas com a camisa do Arsenal. Desta vez com a 12."
    },
    palavra77 = {
        nome: "MARADONA",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Em 2005 o craque argentino encarou uma nova empreitada. Ele se tornou apresentador de um programa de entrevistas na Argentina. Apesar de possuir apenas 13 episódios, ‘La noche del 10’ foi um grande sucesso. Marcaram presença entre os convidados o rei Pelé, Xuxa Meneghel, Mike Tyson, Fidel Castro, Roberto Gómez Bolaños (o Chaves) e o próprio Diego Armando Maradona. Na entrevista, o craque falou para o craque dos arrependimentos da sua vida e carreira, dentre eles, o vício em cocaína."
    },
    palavra78 = {
        nome: "ZIDANE",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Depois de ganhar a Copa, Zidane começou a perder cabelo. Na final de 1998 contra o Brasil, ele já estava ficando careca. Na época, ele não mostrou muita preocupação ao ser questionado sobre a calvície iminente: 'Minha mulher me ama desse jeito, então não tem problema' OBS: Fofo mas meio ????????"
    },
    palavra79 = {
        nome: "RONALDINHO",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Não é melhor que o Neymar kk"
    },
    palavra80 = {
        nome: "GULLIT",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   ão achei nada, sósei que é apelão no FIFA"
    },
    palavra81 = {
        nome: "RIVALDO",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Rivaldo foi também um grande craque de times e momentos inusitados. A alcunha de “craque do futebol alternativo” caberia perfeitamente no habilidoso meia, que viveu os dois extremos do esporte: a alta popularidade e a ausência de qualquer glamour"
    },
    palavra82 = {
        nome: "COPA",
        categoria: "O MAIOR TOREIO DE FUTEBOL - ???? DO MUNNDO",
        curiosidade:"   Todas as seleções campeãs têm seus nomes gravados na parte de baixo da taça, que tem espaço para colocação de nomes até a Copa de 2038, após isso um novo troféu terá que ser criado. O HEXA VEM!!!!"
    },
    palavra83 = {
        nome: "PLATINI",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Chutava com as duas pernas, como um atacante, mas sabia fazer assistências surreais, tal qual um meia de fino toque. De quebra, venceu uma Eurocopa, em 1984 - até então o maior feito da Seleção Francesa, e recebeu a primeira Bola de Ouro da revista France Football, prêmio dado ao melhor jogador da temporada."
    },
    palavra84 = {
        nome: "INIESTA",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Andrés Iniesta é o único jogador da história a ser eleito o Melhor em Campo na final do EURO, na final da Copa do Mundo e na final da Liga dos Campeões."
    },
    palavra85 = {
        nome: "BECKENBAUER",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Apelidado como Kaiser ('Imperador', em alemão), Beckenbauer protagonizou histórias incríveis nas três Copas que disputou como jogador, em 1966, 1970 e 1974, e nas duas que esteve como técnico, em 1986 e 1990. Pela Alemanha Ocidental, ele sagrou-se campeão jogando em casa, em 74, e também dirigindo seu país, em 90."
    },
    palavra86 = {
        nome: "XAVI",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   O lendário Xavi terminou sua temporada de estreia com 26 partidas disputadas e vencendo o campeonato espanhol. Ele também foi nomeado o Jogador Revelação do Ano da La Liga de 1999. Xavi se tornou o principal craque do Barcelona após uma lesão de Pep Guardiola na temporada de 1999-2000."
    },
    palavra87 = {
        nome: "CAFU",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Cafu defendeu apenas seis clubes na carreira até deixar o Milan, em 2008. Ele começou no São Paulo e já foi campeão paulista no primeiro ano como profissional, em 1989. Foram dez títulos em cinco anos, inclusive um Campeonato Brasileiro, duas Libertadores e dois Mundiais"
    },
    palavra88 = {
        nome: "SIIIIIIIIIIIIIIIIIIIIIIIIIIIII",
        categoria: "CRISTIANO RONALDO",
        curiosidade:"   Em uma última entrevista, Cristiano Ronaldo revelou que estava em um amistoso que jogou pelo seu ex-clube Real Madrid contra o Chelsea FC em 2013 em Miami, onde realizou a celebração clássica pela primeira vez."
    },
    palavra89 = {
        nome: "MALDINI",
        categoria: "JOGADOR DE FUTEBOL",
        curiosidade:"   Nascido em Milão, Maldini dedicou 31 anos de sua vida ao Milan, clube pelo qual conquistou incríveis 26 taças. O histórico camisa três rossonero se notabilizou pela técnica como defensor e pela liderança exercida sobre os companheiros, o que lhe rendeu o posto de capitão milanista por 12 anos."
    },
    palavra90 = {
        nome: "PRINCES",
        categoria: "ESTÁDIO - PARC DES ????",
        curiosidade:"   O Parc des Princes, é um estádio localizado a oeste de Paris, na França. Inaugurado em 18 de julho de 1897, é predominantemente utilizado pelo clube Paris Saint-German, mas também abriga partidas de rugby. Ele está localizado num enorme complexo de mesmo nome, o Parc des Princes, criado pelo Duque de Morny em 1860."
    },
    palavra91 = {
        nome: "CAMP",
        categoria: "ESTÁDIO - ???? NOU",
        curiosidade:"   O Camp Nou é um estádio de futebol localizado na cidade de Barcelona, na Catalunha, na Espanha. Seu nome oficial era Estadi del Fútbol Club Barcelona até 2000/2001, quando uma votação realizada entre os torcedores oficializou a sua denominação popular, Camp Nou."
    },
    palavra92 = {
        nome: "SANTIAGO",
        categoria: "ESTÁDIO - ?????? BERNABÉU",
        curiosidade:"   O Estádio Santiago Bernabéu é um estádio de futebol localizado em Madrid, na Espanha, de propriedade do Real Madrid. Localizado no lugar do antigo estádio do Real Madrid, o Estádio Charmatín, o Santiago Bernabéu foi projetado por Luis Alemany Soler e Manuel Muñoz Monasterio. "
    },
    palavra93 = {
        nome: "ALLIANZ",
        categoria: "ESTÁDIO - ???? ARENA",
        curiosidade:"   O Allianz Arena é um estádio em Munique, Alemanha, inaugurado no final de abril de 2005, localizado na parte norte da capital bávara, no distrito de Fröttmaning. É o estádio oficial do Bayern de Munique (substituindo o Olympiastadion) e sediou o jogo de abertura da Copa do Mundo de 2006. O Bayern Munique é dono de 100% do Allianz Arena desde abril de 2006"
    },
    palavra94 = {
        nome: "IDUNA",
        categoria: "ESTÁDIO - SIGNAL ????? PARK",
        curiosidade:"   O Signal Iduna Park é um estádio de futebol localizado na cidade de Dortmund, na Alemanha. Tem a capacidade para 81.365 espectadores, 65.718 sentados. É o estádio com maior capacidade de público do país."
    },
    palavra95 = {
        nome: "BOMBONERA",
        categoria: "ESTÁDIO - LA ?????",
        curiosidade:"   La Bombonera é o estádio do Club Atlético Boca Juniors. Sua capacidade atual é para 54.000 pessoas. O campo segue as medidas mínimas permitidas pela FIFA. O nome oficial homenageia o ex-presidente Alberto José Armando. Seu apelido deve-se à sua forma retangular como a de uma caixa de bombons."
    },
    palavra96 = {
        nome: "HAMILTON",
        categoria: "SEM ELA O HOMEM NÃO CHEGARIA A LUA - MARGARETH ???????",
        curiosidade:"   Foi diretora da Divisão de Software no Laboratório de Instrumentação do MIT, que desenvolveu o programa de voo usado no projeto Apollo 11, a primeira missão tripulada à Lua. O software de Hamilton impediu que o pouso na Lua fosse abortado."
    },
    palavra97 = {
        nome: "EINSTEIN",
        categoria: "O GÊNIO DA FISÍCA DAS CARETAS",
        curiosidade:"   Suas descobertas foram feitas de modo não tradicional. Os artigos foram produzidos fora do horário de expediente, longe de laboratórios, de colegas com quem discutir e até mesmo de uma biblioteca adeuada. Para muitos historiadores da ciência, foi o mais brilhante trabalho amador da História."
    },
    palavra98 = {
        nome: "MEDUSA",
        categoria: "SER DA MITOLODIA",
        curiosidade:"   Um dos fatos mais tristes da história da Medusa é a maldição que ela sofreu. Quando foi abusada por Poseidon, no templo de Atena, também havia lá uma estátua de Atena, esta figura grega ficou furiosa e, injustamente, claro, decidiu amaldiçoar a linda jovem. Pois é! Mesmo sendo abusada, Medusa ficou com a culpa de tudo, e passou a ser vista como uma mulher que não merecia respeito. Mais do que isso, que precisava ser punida."
    },
    palavra99 = {
        nome: "JACKSON",
        categoria: "SOBRENOME DO REIO DO POP",
        curiosidade:"   Em 1983, a MTV com apenas 1 ano de fundada transmitiu “Billie Jean”, sendo o primeiro clipe de um artista negro ser passado na emissora. Apesar de Michael se inspirar em James Brown e Diana Ross, por exemplo, ele que abriu caminho para que eles e outros artistas negros fossem mostrados aos Estados Unidos. Anos após e até hoje, Michael Jackson é homenageado pela MTV com o “Michael Jackson Video Vanguard Award” para recordistas do VMA."
    },
    palavra100 = {
        nome: "SETE",
        categoria: "MEU NÚMERO DA SORTE?",
        curiosidade:"Não tem razão, só é..."
    },
    palavra101 = {
        nome: "SHERLOCK",
        categoria: "NÃO TEM DICA",
        curiosidade:"Sherlock Holmes: O vale do medo é um dos meus livros preferidos. Apesar de Sherlock ser fictício, o endereço dele não é. A localização da Rua Baker 221b realmente existe em Londres: o lugar funciona como um museu em homenagem ao personagem. OBS: Eu juro que achei que ele fosse real por muito tempo..."
    },
    palavra102 = {
        nome: "MATUE",
        categoria: "NÃO TEM DICA",
        curiosidade:"   É o meu cator preferido e um dia faço uma música com ele."
    },
    palavra103 = {
        nome: "YOUTUBE",
        categoria: "NÃO TEM DICA",
        curiosidade:"   É ode teho um caal que posto mihas músicas, ja não posto ada a quase um ao, mas pretendo voltar logo."
    },
    palavra104 = {
        nome: "MAIO",
        categoria: "NÃO TEM DICA",
        curiosidade:"   No dia 09 de Maio de 2020 eu pedi minha namorada em namoro enquato estavamos indo rumo ao termial."
    },
    palavra105 = {
        nome: "N",
        categoria: "NÃO TEM DICA",
        curiosidade:"   Por algum motivo essa letra no teclado não funciona direito, então teho que aperta-la várias vezes pra funcionar."
    }
];


//pegar tanto o nome quanto a categoria da palavra aleatoria
criarPalavraSecreta();
function criarPalavraSecreta(){
    var aleatorio = parseInt(Math.random() * palavras.length);
    

    palavraSorteada = palavras[aleatorio].nome;
    palavraCategoria = palavras[aleatorio].categoria;
    textoSorteado = palavras[aleatorio].curiosidade
}


//exibir a dica do conteúdo e os traços da palavra
palavraNaTela();
function palavraNaTela(){
    var categoria = document.getElementById("dica")
    categoria.innerHTML = palavraCategoria;

    var palavraTela = document.getElementById("palavra_secreta")
    palavraTela.innerHTML = " ";

    for(i = 0; i < palavraSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}


//verifica se a letra que escolhi esta na do segredo e desabilita teclas ja clicadas
function verificaLetraEscolhida(letra){
    document.getElementById("tecla_" + letra).disabled = true
    if(tentativas > 0){
        mudarStyleLetra("tecla_" + letra)
        comparaListas(letra);
        palavraNaTela();
    }
}


//mudar o style de botões ja clicados
function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#c71585"
    document.getElementById(tecla).style.color = "#ffffff"
}


//compara a letra que selecionei com a da palavra secreta, limita os erros e mostra se  vencu
function comparaListas(letra){
    var posicao = palavraSorteada.indexOf(letra)
    if(posicao < 0){
        tentativas--
        caregaImagemForca();

    if(tentativas == 0){
        voceErrou();
    }

    }else{
        for(i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    var vitoria = true
    for(i = 0; i < palavraSorteada.length; i++){
        if(palavraSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }

    if(vitoria == true){
        voceGanhou();
        tentativas = 0 
    }
}


//muda a imagem quando erro de acordo com as chances restantes
function caregaImagemForca(){
    switch(tentativas){
        case 5: 
                document.getElementById('imagem').style.background = "url('./imagens/forca2.png')"
                break;

        case 4: 
                document.getElementById('imagem').style.background = "url('./imagens/forca3.png')"
                break;

        case 3: 
                document.getElementById('imagem').style.background = "url('./imagens/forca4.png')"
                break;

        case 2: 
                document.getElementById('imagem').style.background = "url('./imagens/forca5.png')"
                break;

        case 1: 
                document.getElementById('imagem').style.background = "url('./imagens/forca6.png')"
                break;

        case 0: 
                document.getElementById('imagem').style.background = "url('./imagens/forca7.png')"
                break;
        
        default: 
                document.getElementById('imagem').style.background = "url('./imagens/forca1.png')"
                break;

    }
}


//Fuctio vitoria atribuido a funnctio comparaLista() - if(vitoria == true)
function voceGanhou(){
    window.alert('Você sabia que:' +  textoSorteado)
}

//Fuctio derrota atribuido a funnctio comparaLista() - if(tetnativa == 0)
function voceErrou(){
    window.alert('você errou, a palavra secreta era ' +  palavraSorteada)
}


//reiniar com o botão
var reiniciar = document.getElementById('tecla_reload')
reiniciar.addEventListener('click', function(){
    location.reload();
});