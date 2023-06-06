const ATRIEFLIMREN: Topic = {
  id: "Atrieflimren",
  active: false,
  videos: [],
  parentOptions: [
    {
      name: "Du har",
      description:
        "Ved atrieflimren er din normale hjerterytme afløst af en hurtig, uregelmæssig sammentrækning af hjertets forkamre. Din puls bliver dermed uregelmæssig og som regel også lidt hurtigere end den normale rytme. Atrieflimren er en kronisk sygdom, som kan forekomme i forskellige stadier.",
      time: 26,
      introduction: "Atrieflimren/0/introduction",
      isParent: true,
      options: [
        {
          id: 0,
          name: "Anfaldsvis atrieflimren, som oftest går over af sig selv igen. Hvis du har vedvarende atrieflimren over flere dage, kan det blive nødvendigt med elektrisk stød til hjertet.",
          audioName: "Atrieflimren/0/0",
          time: 21,
          delay: 0.350,
          active: false,

          exclusiveTo: [1],
          exclusive: true,
          radio: true
        },
        {
          id: 1,
          name: "Permanent atrieflimren, hvor rytmeforstyrrelsen er til stede hele tiden.",
          audioName: "Atrieflimren/0/1",
          time: 6,
          delay: 0.350,
          active: false,
          exclusiveTo: [0],
          exclusive: true,
          radio: true
        }
      ],
    },
    {
      name: "Dine symptomer er",
      description: "Atrieflimren opleves forskelligt fra person til person",
      time: 17,
      introduction: "Atrieflimren/1/introduction",
      isParent: true,
      options: [
        {
          id: 0,
          time: 2,
          name: "Hjertebanken",
          audioName: "Atrieflimren/1/0",
          delay: 0.350,
          active: false,
          exclusive: true,
          radio: false,
          exclusiveTo: [6]
        },
        {
          id: 1,
          time: 2,
          name: "Åndenød",
          active: false,
          audioName: "Atrieflimren/1/1",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: [6]
        },
        {
          id: 2,
          time: 2,
          name: "Træthed",
          active: false,
          audioName: "Atrieflimren/1/2",
          delay: 0.350,
          exclusive: false,
          radio: false,
          exclusiveTo: [6]
        },
        {
          id: 3,
          time: 2,
          name: "Brystsmerter",
          active: false,
          audioName: "Atrieflimren/1/3",
          delay: 0.350,
          exclusive: true,
          radio: false,
          exclusiveTo: [6]
        },
        {
          id: 4,
          time: 2,
          name: "Svimmelhed",
          active: false,
          audioName: "Atrieflimren/1/4",
          delay: 0.350,
          exclusive: true,
          radio: false,
          exclusiveTo: [6]
        },
        {
          id: 5,
          time: 2,
          name: "Angst og utryghed",
          active: false,
          audioName: "Atrieflimren/1/5",
          delay: 0.350,
          exclusive: true,
          radio: false,
          exclusiveTo: [6]
        },
        {
          id: 6,
          name: "Du mærker ikke noget til din atrieflimren.",
          audioName: "Atrieflimren/1/6",
          time: 2,
          delay: 0.350,
          active: true,
          exclusiveTo: [0, 1, 2, 3, 4, 5],
          exclusive: true,
          radio: true,
          disableOthers: false
        }
      ]
    },
    {
      name: "Din dagligdag er påvirket af din atrieflimren i",
      description: "",
      time: 3,
      introduction: "Atrieflimren/2/introduction",
      isParent: true,
      options: [
        {
          id: 0,
          time: 2,
          name: "Let grad",
          active: false,
          audioName: "Atrieflimren/2/0",
          delay: 0.550,
          exclusive: true,
          radio: true,
          exclusiveTo: [1, 2, 3]
        },
        {
          id: 1,
          time: 2,
          name: "Moderat grad",
          active: false,
          audioName: "Atrieflimren/2/1",
          delay: 0.550,
          exclusive: true,
          radio: true,
          exclusiveTo: [0, 2, 3]
        },
        {
          id: 2,
          time: 2,
          name: "Svær grad",
          active: false,
          audioName: "Atrieflimren/2/2",
          delay: 0.350,
          exclusive: true,
          radio: true,
          exclusiveTo: [0, 1, 3]
        },
        {
          id: 3,
          name: "Din dagligdag er ikke påvirket af din atrieflimren.",
          audioName: "Atrieflimren/2/3",
          time: 2,
          delay: 0.550,
          active: true,
          exclusiveTo: [1, 2, 0],
          exclusive: true,
          disableOthers: true,
          radio: false
        }
      ]
    },
    {
      name: "Vurdering af behovet for blodfortyndende medicin",
      description: "Det er vigtigt med en individuel vurdering af behovet for blodfortyndende medicin",
      time: 27,
      introduction: "Atrieflimren/3/introduction",
      isParent: true,
      options: [
        {
          id: 0,
          time: 2,
          name: "På nuværende tidspunkt har du ikke behov for blodfortyndende medicin. Det bør til gengæld startes, når du bliver 65 år.",
          active: false,
          audioName: "Atrieflimren/3/0",
          delay: 0.350,
          exclusive: true,
          radio: true,
          exclusiveTo: [1, 2, 3]
        },
        {
          id: 1,
          time: 2,
          name: "Du skal have blodfortyndende medicin frem til det planlagte elektriske stød til hjertet og 4 uger efter.",
          active: false,
          audioName: "Atrieflimren/3/1",
          delay: 0.350,
          exclusive: true,
          radio: true,
          exclusiveTo: [0, 2, 3]
        },
        {
          id: 2,
          time: 2,
          name: "Du skal have blodfortyndende medicin frem til den planlagte varmebehandling. Ved kontrollen efter 3 måneder tages der stilling til, om den blodfortyndende behandling kan stoppe eller skal fortsættes.",
          active: false,
          audioName: "Atrieflimren/3/2",
          delay: 0.350,
          exclusive: true,
          radio: true,
          exclusiveTo: [0, 1, 3]
        },
        {
          id: 3,
          time: 2,
          name: "Vi anbefaler at du får blodfortyndende medicin. Behandlingen er effektiv og livslang.",
          active: false,
          audioName: "Atrieflimren/3/3",
          delay: 0.350,
          exclusive: true,
          radio: true,
          exclusiveTo: [0, 1, 2]
        }
      ]
    },
    {
      name: "Din blodfortyndende behandling består af",
      description: "",
      time: 22,
    //  introduction: "Atrieflimren/4/introduction",
      audioName: "Atrieflimren/4/0",
      exclusiveTo: ["Vurdering af behovet for blodfortyndende medicin", 1, 2, 3],
      disabled: true,
      isParent: false,
      options: [
        {
          id: 0,
          time: 2,
          name: "Tablet Eliquis 5 mg 2 gange dagligt, indtages med ca. 12 timers mellemrum.",
          active: false,
          audioName: "Atrieflimren/4/1",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: ["all"],
          disableOthers: true
        },
        {
          id: 1,
          time: 2,
          name: "Tablet Eliquis 2.5 mg 2 gange dagligt, indtages med ca. 12 timers mellemrum.",
          active: false,
          audioName: "Atrieflimren/4/2",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: ["all"],
          disableOthers: true
        },
        {
          id: 2,
          time: 22,
          name: "Tablet Xarelto 20 mg 1 gang dagligt, skal indtages sammen med mad",
          active: false,
          audioName: "Atrieflimren/4/3",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: ["all"],
          disableOthers: true
        },
        {
          id: 3,
          time: 2,
          name: "Tablet Xarelto 15 mg 1 gang dagligt, skal indtages sammen med mad",
          active: false,
          audioName: "Atrieflimren/4/4",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: ["all"],
          disableOthers: true
        },
        {
          id: 4,
          time: 2,
          name: "Tablet Lixiana 60 mg 1 gang dagligt",
          active: false,
          audioName: "Atrieflimren/4/5",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: ["all"],
          disableOthers: true
        },
        {
          id: 5,
          time: 2,
          name: "Tablet Lixiana 30 mg 1 gang dagligt",
          active: false,
          audioName: "Atrieflimren/4/6",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: ["all"],
          disableOthers: true
        },
        {
          id: 6,
          time: 2,
          name: "Kapsel Pradaxa 150 mg 2 gange dagligt, indtages med ca. 12 timers mellemrum. Kapslerne skal blive i den originale pakning indtil brug.",
          active: false,
          audioName: "Atrieflimren/4/7",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: ["all"],
          disableOthers: true
        },
        {
          id: 7,
          time: 2,
          name: "Kapsel Pradaxa 110 mg 2 gange dagligt, indtages med ca. 12 timers mellemrum. Kapslerne skal blive i den originale pakning indtil brug.",
          active: false,
          audioName: "Atrieflimren/4/8",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: ["all"],
          disableOthers: true
        },
        {
          id: 8,
          time: 2,
          name: "Tablet Marevan. Behandlingen kontrolleres ved regelmæssig måling af blodprøven INR, hvor det rette interval for INR er mellem 2 og 3.",
          active: false,
          audioName: "Atrieflimren/4/9",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: ["all"],
          disableOthers: true
        },
        {
          id: 9,
          time: 2,
          separator: true,
          name: "Din nyrefunktion bør kontrolleres hos din egen læge hver 3. måned i det første år, og derefter ca. 2 gange årligt.",
          active: false,
          audioName: "Atrieflimren/4/10",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        }
      ]
    },
    {
      name: "Vi er i fællesskab blevet enige om",
      description:
        "Det vigtigste er at tage stilling til blodfortyndende medicin. Den øvrige behandling har til formål at dæmpe dine symptomer og forbedre livskvaliteten.",
      time: 22,
      introduction: "Atrieflimren/5/introduction",
 //     audioName: "Atrieflimren/5/0",
      isParent: true,
      options: [
        {
          id: 0,
          time: 4,
          name: "At dine anfald på nuværende tidspunkt er så sjældne, at du ikke har brug for yderligere.",
          active: false,
          radio: true,
          audioName: "Atrieflimren/5/1",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 1,
          time: 4,
          name: "At du ved anfald kan tage betablokker.",
          active: false,
          radio: true,
          audioName: "Atrieflimren/5/2",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },

        {
          id: 2,
          time: 27,
          name: "At planlægge DC-konvertering. Det er vigtigt, at du i tiden efter DC-konvertering mærker efter, hvorvidt du oplever bedring af dine symptomer eller ej. Atrieflimren vil på et tidspunkt komme igen, og til den tid vil denne information være meget nyttig i forhold til at planlægge din videre behandling.",
          active: false,
          radio: true,
          audioName: "Atrieflimren/5/3",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 3,
          time: 2,
          name: "Frekvenskontrol med betablokker.",
          active: false,
          radio: true,
          audioName: "Atrieflimren/5/4",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 4,
          time: 2,
          name: "Frekvenskontrol med calciumblokker.",
          active: false,
          radio: true,
          audioName: "Atrieflimren/5/5",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 5,
          time: 2,
          name: "Frekvenskontrol med Digoxin.",
          active: false,
          radio: true,
          audioName: "Atrieflimren/5/6",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 6,
          time: 2,
          name: "Rytmekontrol med Flecainid. Behandlingen startes under indlæggelse med hjerteovervågning i 2 døgn. Flecainid skal altid kombineres med enten betablokker, calciumblokker eller Digoxin. Behandlingen kræver kontrol i Hjerteklinikken hvert ½ år.",
          active: false,
          radio: true,
          audioName: "Atrieflimren/5/7",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 7,
          time: 2,
          name: "Rytmekontrol med Multaq. Behandlingen kræver kontrol i Hjerteklinikken hvert ½ år.",
          active: false,
          radio: true,
          audioName: "Atrieflimren/5/8",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 8,
          time: 2,
          name: "Rytmekontrol med Cordarone. Behandlingen kræver kontrol i Hjerteklinikken hvert ½ år.",
          active: false,
          radio: true,
          audioName: "Atrieflimren/5/9",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 9,
          time: 2,
          name: "At henvise dig til ablation.",
          active: false,
          radio: true,
          audioName: "Atrieflimren/5/10",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        }
      ]
    },
    {
      name: "Hvad kan jeg selv gøre",
      description: "this be a description",
      time: 20,
      audioName: "Atrieflimren/6/0",
      isParent: true,
      options: [
        {
          id: 0,
          time: 28,
          name: "Rygestop er det allerbedste du kan gøre for dit helbred. Det er aldrig for sent at stoppe.",
          active: false,
          audioName: "Atrieflimren/6/1",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 1,
          time: 25,
          name: "Vægttab er meget gavnligt. Vægttab – gerne 10% - vil medføre færre og kortere anfald og symptomerne bliver mildere.",
          active: false,
          audioName: "Atrieflimren/6/2",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 2,
          time: 29,
          name: "Motion er generelt godt for din sundhed, både hjertet, kredsløbet og hjernen",
          active: false,
          audioName: "Atrieflimren/6/3",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 3,
          time: 22,
          name: "Vi støtter Sundhedsstyrelsens anbefalinger om max. 10 genstande om ugen og max. 4 genstande ad gangen.",
          active: false,
          audioName: "Atrieflimren/6/4",
          delay: 0.350,
          exclusive: false,
          exclusiveTo: []
        },
        {
          id: 4,
          time: 2,
          name: "Det er vigtigt at dit blodtryk er velbehandlet. Køb evt. selv et blodtryksapparat. Blodtrykket på sygehuset eller hos din egen læge, skal være under 140/90. Derhjemme skal det i gennemsnit være",
          active: false,
          audioName: "Atrieflimren/6/5",
          delay: 0.350,
          exclusive: true,
          exclusiveTo: [],
          enables: [5, 6]
        },
        {
          id: 5,
          time: 2,
          // add to previous option
          addToPrev: 1,
          name: "under 135/85",
          active: false,
          audioName: "Atrieflimren/6/5-1",
          delay: 0.350,
          exclusive: true,
          radio: true,
          exclusiveTo: [6],
          disabled: true
        },
        {
          id: 6,
          time: 2,
          name: "under 130/80",
          addToPrev: 2,
          active: false,
          audioName: "Atrieflimren/6/5-2",
          delay: 0.350,
          exclusive: true,
          radio: true,
          exclusiveTo: [5],
          disabled: true
        },
        {
          id: 7,
          time: 2,
          name: "Målet er at leve et godt liv med atrieflimren.",
          active: false,
          audioName: "Atrieflimren/6/8",
          delay: 0.750,
          exclusive: false
        }
      ]
    }
  ]
}

export default ATRIEFLIMREN
