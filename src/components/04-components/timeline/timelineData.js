import ACD1 from '../../../assets/images/arthurs_life/1859.png'
import ACD2 from '../../../assets/images/arthurs_life/1882.jpg'
import ACD3 from '../../../assets/images/arthurs_life/1883.jpg'
import ACD4 from '../../../assets/images/arthurs_life/1884.jpg'
import ACD5 from '../../../assets/images/arthurs_life/1885.jpg'
import ACD6 from '../../../assets/images/arthurs_life/1887.jpg'
// import ACD7 from '../../../assets/images/arthurs_life/1888.jpg'
import ACD8 from '../../../assets/images/arthurs_life/1889.jpg'
import ACD9 from '../../../assets/images/arthurs_life/1889(2).jpg'
import ACD10 from '../../../assets/images/arthurs_life/1890.jpg'
import ACD11 from '../../../assets/images/arthurs_life/1890(2).jpg'
import ACD12 from '../../../assets/images/arthurs_life/1895.jpg'
import ACD13 from '../../../assets/images/arthurs_life/1930.jpeg'
import ACD14 from '../../../assets/images/arthurs_life/library.jpg'
import ACD15 from '../../../assets/images/arthurs_life/museum.jpg'
import ACD16 from '../../../assets/images/arthurs_life/cemetery.jpg'
import ACD17 from '../../../assets/images/arthurs_life/spiritualist.jpg'
import ACD18 from '../../../assets/images/arthurs_life/Doyle_1.jpg'
import ACD19 from '../../../assets/images/arthurs_life/cricket.jpg'

const slideData = [
    {
      index: 0,
      date: '1859',
      headline: 'Arthur Conan Doyle is born',
      text: 'Arthur was born on 22 May 1859 at 11 Picardy Place, Edinburgh, Scotland. His father, Charles Altamont Doyle, was born in England and is of Irish Catholic descent. Arthur\'s mother, Mary née Foley, was Irish Catholic. His parents married in 1855. Before he moved to Portsmouth Arthur was a student at the University of Edinburgh Medical School. During this time he served as ship\'s surgeon on the Greenland whaler Hope before being awarded his Bachelor of Medicine and Masters of Surgery.',
      location: '',
      caption: '',
      src: ACD1,
      positionA: 55.969768,
      positionB: -3.190705,
      timelineModifier: true,
      arthursHouse: false,
    },
    {
      index: 1,
      date: '1882',
      headline: 'Conan Doyle arrived in Portsmouth to establish his own medical practice.',
      text: 'Arthur wrote his first two Sherlock Holmes stories while living in Portsmouth where he had arrived to set up a doctor\'s practice at 1 Bush Villas, Elm Grove, Southsea. These stories were A Study in Scarlet, which was published in 1887, and The Sign of Four, published in 1890. More stories soon followed and it was not long before Arthur found himself more successful as a writer than he was as a doctor. He felt at home in Portsmouth, a city with literary connections; other famous residents have included Charles Dickens, Rudyard Kipling and H G Wells.',
      src: ACD2,
      location: '',
      caption: '',
      positionA: 50.786000,
      positionB: -1.101455,
      timelineModifier: true,
      arthursHouse: false,
    },
    {
      index: 2,
      date: '1883',
      headline: 'Arthur became first goalkeeper for the team that became Portsmouth Football Club.',
      text: 'Arthur threw himself into the life of the town. He was the first goalkeeper for the team that became Portsmouth Football Club. He also joined the Portsmouth Literary and Scientific Society, and gave public talks on Edward Gibbon, Thomas Carlyle, and George Meredith, among others.',
      src: ACD3,
      location: '',
      caption: '',
      positionA: 50.796525,
      positionB: -1.063766,
      timelineModifier: true,
      arthursHouse: false,
    },
    {
      index: 3,
      date: '1884',
      headline: 'J. Habakuk Jephson’s Statement is published.',
      text: 'J. Habakuk Jephson\'s Statement is a short story written by Arthur Conan Doyle first published anonymously in The Cornhill Magazine in January 1884. Arthur had been inspired by the real case of the ship Mary Celeste which had been found drifting in the Atlantic off the coast of Portugal, under full sail but apparently abandoned. He had been one of the first writers to publish a version of what happened. He drew heavily on fact but included significant differences that have since been accredited to the real story, not least in calling the ship the Marie, rather than Mary, Celeste. Some journalists even took his account as the true story.',
      src: ACD4,
      location: 'Arthur\'s House at No. 1 Bush Villas',
      caption: 'Use the arrows keys to navigate through each event that took place here at his home in Southsea',
      timelineModifier: true,
      arthursHouse: true,
      positionA: 50.790482,
      positionB: -1.090724,
    },
    {
      index: 4,
      date: '1885',
      headline: 'On August 5th, Arthur married Louise “Toulie” Hawkins.',
      text: 'Louisa Hawkins aka Louise aka Touie (10 April 1857 - 4 July 1906) was the first wife of Arthur Conan Doyle. They married on 6 august 1885. They had 2 children together: Mary in 1889 and Kingsley in 1892. In his autobiography Memories and Adventures (1923), Arthur wrote how he met Louisa : “In the year 1885 my brother left me to go to a public school in Yorkshire. Shortly afterwards I was married. A lady named Mrs. Hawkins, a widow of a Gloucestershire family, had come to Southsea with her son and daughter, the latter a very gentle and amiable girl.',
      src: ACD5,
      location: '',
      caption: '',
      positionA: 54.157516,
      positionB: -2.482704,
      timelineModifier: true,
      arthursHouse: false
    },
    {
      index: 5,
      date: '1887 - 1888',
      headline: 'Study in Scarlet published in beeton\'s christmas annual and as a book',
      text: 'Beeton\'s Christmas Annual was a paperback magazine printed in England yearly between 1860 and 1898, founded by Samuel Orchart Beeton. The November 1887 issue contained a novel by Arthur Conan Doyle entitled A Study in Scarlet. This novel first introduced the characters Sherlock Holmes and his friend Watson. In 1888 a Study in Scarlet was published as a book. Arthur originally wrote the story in 1886',
      src: ACD6,
      location: 'Arthur\'s House at No. 1 Bush Villas',
      caption: 'Use the arrows keys to navigate through each event that took place here at his home in Southsea',
      arthursHouse: true,
      timelineModifier: true,
      positionA: 50.790482,
      positionB: -1.090724
    },
    {
      index: 6,
      date: '1889',
      headline: 'Mary, the first child of Arthur Conan Doyle, is born.',
      text: 'Mary Louise Conan Doyle aka Toots (28 January 1889 - 12 June 1976) was the daughter and first child of Arthur Conan Doyle and Louisa Hawkins. She had a direct younger brother Kingsley and 3 half-siblings Denis, Adrian and Jean (Lena) from the second marriage of her father. Mary, aged 9, wrote A Visit to Heaven which her father published privately in 200 copies. She worked as a journalist and musician.',
      src: ACD8,
      location: 'Arthur\'s House at No. 1 Bush Villas',
      caption: 'Use the arrows keys to navigate through each event that took place here at his home in Southsea',
      positionA: 50.790482,
      positionB: -1.090724,
      timelineModifier: true,
      arthursHouse: true
    },
    {
      index: 7,
      date: '1889',
      headline: 'Micah Clarke is published',
      text: 'Micah Clarke is a historical adventure novel written by Arthur and published in 1889. The novel was set during the Monmouth Rebellion of 1685 in England. The book is a bildungsroman whose protagonist, Micah Clarke, begins as a boy seeking adventure in a romantic and naive way. He falls under the influence of an older and vastly experienced, world-weary soldier of fortune, and becomes a grown up after numerous experiences, some of them very harrowing.',
      src: ACD9,
      location: 'Arthur\'s House at No. 1 Bush Villas',
      caption: 'Use the arrows keys to navigate through each event that took place here at his home in Southsea',
      timelineModifier: true,
      arthursHouse: true,
      positionA: 50.790482,
      positionB: -1.090724
    },
    {
      index: 8,
      date: '1890',
      headline: 'The Sign of Four is published.',
      text: 'The Sign of Four is a Sherlock Holmes novel written by Arthur Conan Doyle first published in the Lippincott\'s Magazine in February 1890. This was the second Sherlock Holmes story. In the 7 and 14 June 1890 issues of The Bristol Observer appeared the first illustrations of Sherlock Holmes wearing a deerstalker, before the well known Sidney Paget ones.',
      src: ACD10,
      location: 'Arthur\'s House at No. 1 Bush Villas',
      caption: 'Use the arrows keys to navigate through each event that took place here at his home in Southsea',
      timelineModifier: true,
      arthursHouse: true,
      positionA: 50.790482,
      positionB: -1.090724
    },
    {
      index: 9,
      date: '1890',
      headline: 'Arthur left Portsmouth in December to pursue his career in medicine',
      text: 'He left Portsmouth in 1890 so he could travel to Vienna to study Ophthalmology. He returned to London in 1891 to set up an ophthalmologist practice in Wimpole Street. In Conan Doyle’s own words, not a single patient crossed his door, which meant he could dedicate himself to writing. He also had an epiphany when he suffered a severe bout of influenza and decided, with great joy, to give up his medical career so he could concentrate solely on his literary one. He started toying with the idea of killing off Holmes so he could concentrate on more serious writing.',
      src: ACD11,
      location: '',
      caption: '',
      timelineModifier: true,
      arthursHouse: false,
      positionA: 50.784870,
      positionB: -1.099984
    },
    {
      index: 10,
      date: '1895',
      headline: 'Arthur wrote about his time in Portsmouth',
      text: '"I was alone in a strange town, without connections, without introductions, with less than a pound in my pocket, and with no possibility of freeing myself from my responsibilities. I had no one at all to look to for help, for all my recent letters from home had given a dreary account of the state of things there. For the next three days I had not a single ring at the bell of any sort whatever. A man could not be more isolated from his kind."',
      src: ACD12,
      location: '',
      caption: '',
      timelineModifier: true,
      arthursHouse: false
    },
    {
      index: 11,
      date: '1930',
      headline: 'Sir Arthur Conan Doyle died on July 7. He was buried at the rose garden in Windlesham.',
      text: 'He died of a heart attack at his home in Crowborough on July 7th 1930. He was found slumped against a wall, clutching his chest. Popular anecdote suggests his last words were for Jean, to whom he said "You are wonderful!" Due to his divided religious beliefs, it was decided to bury Sir Arthur in the Rose Garden of Windlesham Manor, his home. Later when Jean passed away, he was buried again to rest with her, in Minstead Churchyard, New Forest.',
      src: ACD13,
      location: '',
      caption: '',
      positionA: 50.896892,
      positionB: -1.601703,
      timelineModifier: true,
      arthursHouse: false
    },
    {
      index: 12,
      headline: 'Come and visit us at the Conan Doyle Collection',
      text: 'The world-class Collection brings together books, photographs, objects, documents and memorabilia chronicling the life of Conan Doyle and beyond. With magnifying glasses at the ready, we welcome you to conduct your own investigation of the famous writer, his works, life and legacy, including the Portsmouth-born, world-famous detective, Sherlock Holmes. ',
      src: ACD14,
      location: '',
      caption: '',
      positionA: 50.796664,
      positionB: -1.091591,
      timelineModifier: false,
      arthursHouse: false,
      link: '/about'
    },
    {
      index: 13,
      headline: 'Study in Sherlock: Uncovering the Arthur Conan Doyle Collection',
      text: 'Whatever the weather, ‘A Study in Sherlock: Uncovering the Arthur Conan Doyle Collection’ will encourage your creativity and powers of detection.  The wide ranging exhibition has interest for people of all ages with a specially designed section of childrens activities. This exhibition provides the visitor with an introduction to the Richard Lancelyn Green Collection and an opportunity to explore its breadth through a variety of media including films and commentaries.',
      src: ACD15,
      location: '',
      caption: '',
      positionA: 50.791825,
      positionB: -1.097351,
      link: 'https://www.visitportsmouth.co.uk/conandoyle/visit/objects',
      timelineModifier: false,
      arthursHouse: false
    },
    {
      index: 14,
      headline: 'Highland Road Cemetery where Louisa Hawkins brother was buried',
      text: 'Louisa was living with her mother (Emily Hawkins) and her brother (John aka Jack) at 2 Queens Gate, Osborne Road, Southsea. Arthur Conan Doyle took Louisa\'s brother John as a resident patient in his cabinet because of cerebral meningitis. But John died on 27 march 1885 in Arthur\'s house. This was how Doyle and Louisa met.',
      src: ACD16,
      location: '',
      caption: '',
      positionA: 50.785587,
      positionB: -1.065574,
      timelineModifier: false,
      arthursHouse: false
    },
    {
      index: 15,
      headline: 'Spiritualist Church where Arthur visited during his time in Portsmouth',
      text: 'At the time of his death on July 7, 1930, Sir Arthur Conan Doyle had long been established as the world’s best-known and most outspoken proponent of Spiritualism, he believed that the dead are able to communicate with the living through an earthly conduit, or medium. For fourteen years Arthur had devoted the better part of his time, energy and resources to this cause, which he often described as “the most important thing in the world.” He once declared he would gladly sacrifice whatever literary reputation he enjoyed if it would bring about a greater acceptance of his psychic message, and to those who found comfort and meaning in his beliefs. He was “the Saint Paul of Spiritualism.”',
      src: ACD17,
      location: '',
      caption: '',
      positionA: 50.786636,
      positionB: -1.081545,
      timelineModifier: false,
      arthursHouse: false
    },
    {
      index: 16,
      headline: 'St Jude\'s Church, a spot that Arthur visited regularly',
      text: 'Though Conan Doyle was a scientist and a rationalist like his fictional alter ego. However, his spiritual interests included a fascination with the possibility of ghosts. He was resistant to much of the dogma of organised religion and engaged in lively debates with the vicar of St Jude’s. "One of the reasons Arthur Conan Doyle had connections with St Jude’s was because his home was less than 10 minutes’ walk away.',
      src: ACD18,
      location: '',
      caption: '',
      positionA: 50.786805,
      positionB: -1.088235,
      timelineModifier: false,
      arthursHouse: false
    },
    {
      index: 17,
      headline: 'Cricketing connections of Arthur Conan Doyle',
      text: 'As well as his love for football Arthur was also an enthusiastic cricketer through his life, joining the local cricket and bowls teams whilst he was in Portsmouth. He scored 231 runs in his career with a highest of 43 from 18 innings at an average of 19.25. He bowled only 85 deliveries, giving away 50 runs with his best bowling figures of 1/4 in the seven years that he played.',
      src: ACD19,
      location: '',
      caption: '',
      positionA: 50.782339,
      positionB: -1.065125,
      timelineModifier: false,
      arthursHouse: false
    },
  ]

export {slideData};
