import type { Question } from '../types';

export const QUESTIONS: Question[] = [
    // Prevenção
    {
        id: 1,
        category: "Prevenção",
        question: "A Prevenção Combinada só se aplica a pessoas que vivem com HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "A Prevenção Combinada é uma estratégia que faz uso simultâneo de diferentes abordagens de prevenção (biomédicas, comportamentais e estruturais) aplicadas a todos, não apenas a quem vive com HIV."
    },
    {
        id: 2,
        category: "Prevenção",
        question: "A Profilaxia Pós-Exposição (PEP) só é eficaz se tomada até 72 horas após a exposição ao HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Para ser eficaz, a PEP deve ser iniciada logo após a exposição de risco, preferencialmente nas primeiras duas horas, e no máximo até 72 horas."
    },
    {
        id: 3,
        category: "Prevenção",
        question: "O uso regular da PrEP é uma medida médica para prevenir a infecção pelo HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "A PrEP (Profilaxia Pré-Exposição) consiste no uso de antirretrovirais por pessoas que não têm o vírus, para reduzir o risco de infecção pelo HIV."
    },
    {
        id: 4,
        category: "Prevenção",
        question: "Uma pessoa que convive com HIV em tratamento eficaz e com carga viral indetectável pode transmitir o vírus durante relações sexuais.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Indetectável = Intransmissível (I=I). Pessoas com carga viral indetectável não transmitem o HIV sexualmente."
    },
    {
        id: 5,
        category: "Prevenção",
        question: "Usar preservativo é a única forma de prevenção contra o HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Existem outras formas, como a PrEP, a PEP, e o Tratamento como Prevenção (I=I), que fazem parte da Prevenção Combinada."
    },
    {
        id: 6,
        category: "Prevenção",
        question: "A Prevenção Combinada não inclui ações de combate ao estigma e discriminação.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O combate ao estigma e à discriminação é parte fundamental das intervenções estruturais da Prevenção Combinada."
    },
    {
        id: 7,
        category: "Prevenção",
        question: "O Tratamento como Prevenção (TARV) é uma abordagem que impede a transmissão do HIV quando a pessoa vivendo com HIV está com a carga viral indetectável.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O tratamento antirretroviral eficaz reduz a carga viral a níveis indetectáveis, impedindo a transmissão sexual do vírus."
    },
    {
        id: 8,
        category: "Prevenção",
        question: "A Prevenção Combinada abrange apenas o uso de medicamentos para prevenir a transmissão do HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Ela combina intervenções biomédicas, comportamentais e estruturais."
    },
    {
        id: 9,
        category: "Prevenção",
        question: "Há estratégias para minimizar os riscos de infecção pelo HIV associados ao uso de drogas, tais como uso de seringas novas, evitando o compartilhamento de seringas.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "A redução de danos é uma estratégia importante de prevenção para usuários de drogas injetáveis."
    },
    {
        id: 10,
        category: "Prevenção",
        question: "O tratamento das Infecções Sexualmente Transmissíveis (IST) faz parte das estratégias da Prevenção Combinada para reduzir o risco de transmissão do HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O tratamento de outras ISTs reduz a vulnerabilidade e o risco de transmissão e aquisição do HIV."
    },
    {
        id: 11,
        category: "Prevenção",
        question: "A distribuição de preservativos é considerada uma estratégia comportamental dentro da Prevenção Combinada.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "A distribuição de preservativos é uma intervenção biomédica (insumo), embora incentive o comportamento de uso."
    },
    {
        id: 12,
        category: "Prevenção",
        question: "A Prevenção Combinada não contempla ações de educação sexual.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "A educação sexual é uma parte crucial das intervenções comportamentais e estruturais."
    },
    {
        id: 13,
        category: "Prevenção",
        question: "A testagem regular para HIV e IST faz parte da abordagem de Prevenção Combinada.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O diagnóstico precoce e regular é essencial para o tratamento e a prevenção."
    },
    {
        id: 14,
        category: "Prevenção",
        question: "A Prevenção Combinada considera as condições sociais e estruturais, como o acesso aos serviços de saúde e a redução do estigma.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Intervenções estruturais abordam os fatores sociais, econômicos e políticos que influenciam a vulnerabilidade ao HIV."
    },
    {
        id: 15,
        category: "Prevenção",
        question: "Uma pessoa que usa PrEP (Profilaxia Pré-Exposição) não precisa usar preservativo.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "A PrEP previne apenas o HIV. O preservativo protege contra outras ISTs e é recomendado como parte da prevenção combinada."
    },
    {
        id: 16,
        category: "Prevenção",
        question: "A PrEP protege contra todas as Infecções Sexualmente Transmissíveis (ISTs), como sífilis e gonorreia.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "A PrEP é específica para o HIV e não protege contra outras ISTs."
    },
    {
        id: 17,
        category: "Prevenção",
        question: "A Profilaxia Pós-Exposição (PEP) é uma estratégia usada após uma situação de risco e deve ser iniciada até 7 dias após a exposição.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "A PEP deve ser iniciada o mais rápido possível, idealmente nas primeiras 2h, e no MÁXIMO até 72 horas (3 dias), não 7 dias."
    },
    {
        id: 18,
        category: "Prevenção",
        question: "Pessoas vivendo com HIV que seguem o tratamento adequadamente e alcançam carga viral indetectável podem ter uma vida sexual ativa sem o risco de transmitir o HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O conceito I=I (Indetectável = Intransmissível) confirma que o tratamento eficaz previne a transmissão sexual."
    },
    {
        id: 19,
        category: "Prevenção",
        question: "A PEP (Profilaxia Pós-Exposição) é um tratamento de emergência para prevenir a infecção pelo HIV após uma possível exposição ao vírus.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "É uma medida de urgência utilizada após exposição sexual consentida, violência sexual ou acidente ocupacional."
    },
    {
        id: 20,
        category: "Prevenção",
        question: "A PEP (Profilaxia Pós-Exposição) pode ser usada como uma medida contínua de prevenção do HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "A PEP é para emergências. Para prevenção contínua, utiliza-se a PrEP ou preservativos."
    },
    {
        id: 21,
        category: "Prevenção",
        question: "A PEP (Profilaxia Pós-Exposição) é 100% eficaz na prevenção do HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Embora muito eficaz, nenhuma prevenção é 100% garantida se não usada corretamente ou se houver falhas, mas reduz drasticamente o risco."
    },
    {
        id: 22,
        category: "Prevenção",
        question: "O tratamento da PEP (Profilaxia Pós-Exposição) dura 28 dias.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O esquema padrão da PEP dura 28 dias ininterruptos."
    },
    {
        id: 23,
        category: "Prevenção",
        question: "A PEP (Profilaxia Pós-Exposição) pode ser obtida sem prescrição médica.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "A PEP é um medicamento antirretroviral e exige prescrição e acompanhamento em serviços de saúde."
    },
    {
        id: 24,
        category: "Prevenção",
        question: "Após completar o tratamento com PEP (Profilaxia Pós-Exposição), a pessoa não precisa mais realizar testes de HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "É necessário realizar testes de acompanhamento após o fim da PEP para confirmar a não infecção."
    },

    // Tratamento
    {
        id: 25,
        category: "Tratamento",
        question: "O tratamento do HIV envolve o uso de medicamentos antirretrovirais que ajudam a controlar o vírus.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Os antirretrovirais impedem a multiplicação do vírus no organismo."
    },
    {
        id: 26,
        category: "Tratamento",
        question: "Se a pessoa vivendo com HIV estiver em tratamento e alcançar a carga viral indetectável, ela pode transmitir o vírus.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Indetectável = Intransmissível. O tratamento eficaz previne a transmissão."
    },
    {
        id: 27,
        category: "Tratamento",
        question: "O tratamento do HIV deve ser interrompido quando a pessoa se sente melhor.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O tratamento é para a vida toda e não deve ser interrompido, pois o vírus pode voltar a se multiplicar e criar resistência."
    },
    {
        id: 28,
        category: "Tratamento",
        question: "O tratamento com antirretrovirais pode levar à cura completa do HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Ainda não há cura definitiva para o HIV, mas o tratamento permite viver com qualidade e sem sintomas (cura funcional)."
    },
    {
        id: 29,
        category: "Tratamento",
        question: "O início precoce do tratamento antirretroviral melhora a qualidade de vida das pessoas vivendo com HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Iniciar o tratamento cedo preserva o sistema imunológico e previne doenças oportunistas."
    },
    {
        id: 30,
        category: "Tratamento",
        question: "O tratamento com antirretrovirais pode causar efeitos colaterais, mas esses efeitos podem ser controlados com o acompanhamento médico.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Efeitos colaterais podem ocorrer, mas geralmente são manejáveis ou diminuem com o tempo."
    },
    {
        id: 31,
        category: "Tratamento",
        question: "Se uma pessoa interromper o tratamento de seus antirretrovirais, o HIV pode se tornar resistente ao tratamento.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "A interrupção ou uso irregular pode levar à resistência viral, tornando os medicamentos ineficazes."
    },
    {
        id: 32,
        category: "Tratamento",
        question: "Uma pessoa vivendo com HIV, em tratamento adequado e com carga viral indetectável, ainda precisa usar preservativo para se proteger de outras ISTs.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Indetectável não transmite HIV, mas não protege contra sífilis, gonorreia, HPV, etc."
    },
    {
        id: 33,
        category: "Tratamento",
        question: "O tratamento do HIV precisa ser ajustado periodicamente, mesmo que a pessoa tenha alcançado a carga viral indetectável.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O monitoramento médico é contínuo para avaliar a saúde geral, efeitos colaterais e eficácia a longo prazo."
    },
    {
        id: 34,
        category: "Tratamento",
        question: "A adesão ao tratamento antirretroviral é crucial para evitar o avanço da infecção pelo HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "A adesão correta mantém a supressão viral e a saúde do sistema imunológico."
    },
    {
        id: 35,
        category: "Tratamento",
        question: "A terapia antirretroviral (TARV) moderna é composta de, no mínimo, três classes de medicamentos diferentes para prevenir a resistência viral.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Geralmente combina-se medicamentos de diferentes classes para atacar o vírus em diferentes estágios de replicação."
    },
    {
        id: 36,
        category: "Tratamento",
        question: "Pacientes que atingem carga viral indetectável não precisam mais de monitoramento periódico de carga viral e contagem de CD4.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O monitoramento continua sendo necessário para garantir que o tratamento segue eficaz."
    },
    {
        id: 37,
        category: "Tratamento",
        question: "A resistência aos medicamentos antirretrovirais pode ocorrer devido a falhas na adesão ao tratamento ou à mutação natural do vírus.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O uso irregular é a principal causa de resistência."
    },
    {
        id: 38,
        category: "Tratamento",
        question: "O início tardio da terapia antirretroviral (TARV) não afeta a expectativa de vida dos pacientes vivendo com HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O diagnóstico e tratamento tardios podem comprometer a recuperação do sistema imune e afetar o prognóstico."
    },
    {
        id: 39,
        category: "Tratamento",
        question: "A diminuição da carga viral por longo tempo, em pacientes em tratamento antirretroviral, pode reduzir a inflamação associada à infecção pelo HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "A supressão viral reduz a inflamação crônica causada pelo HIV."
    },
    {
        id: 40,
        category: "Tratamento",
        question: "A profilaxia de infecções oportunistas não é necessária para pacientes com contagem de CD4 acima de 200 células/mm³.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Geralmente, a profilaxia é indicada quando a imunidade está muito baixa (CD4 < 200)."
    },
    {
        id: 41,
        category: "Tratamento",
        question: "A terapia antirretroviral de longa duração pode levar ao desenvolvimento de dislipidemia, resistência à insulina e outras condições metabólicas.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Alguns antirretrovirais podem ter efeitos metabólicos a longo prazo, exigindo monitoramento."
    },
    {
        id: 42,
        category: "Tratamento",
        question: "O conceito de 'reservatório viral' implica que o HIV pode permanecer latente em certas células do corpo, o que impede a erradicação completa do vírus com a TARV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O vírus fica 'escondido' (latente) em reservatórios, voltando a se replicar se o tratamento parar."
    },
    {
        id: 43,
        category: "Tratamento",
        question: "Pessoas em tratamento com TARV e carga viral indetectável ainda podem ter a função imunológica comprometida, independentemente da contagem de CD4.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Embora a recuperação seja comum, alguns danos imunológicos podem persistir ou a recuperação ser incompleta."
    },
    {
        id: 44,
        category: "Tratamento",
        question: "Os ensaios clínicos mais recentes indicam que terapias antirretrovirais de longa duração, como injeções mensais ou bimestrais, são tão eficazes quanto a terapia oral diária em suprimir o HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Novas terapias injetáveis de longa duração têm mostrado eficácia comparável e facilitam a adesão."
    },

    // Diagnóstico
    {
        id: 45,
        category: "Diagnóstico",
        question: "O teste de HIV pode apresentar resultado reagente um dia após a exposição ao vírus.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Existe uma janela imunológica. O corpo leva um tempo para produzir anticorpos detectáveis ou para o vírus ser detectável, geralmente não em 1 dia."
    },
    {
        id: 46,
        category: "Diagnóstico",
        question: "O teste de HIV é sempre conclusivo se realizado durante a janela imunológica.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Durante a janela imunológica, o resultado pode ser um falso negativo."
    },
    {
        id: 47,
        category: "Diagnóstico",
        question: "O HIV pode ser diagnosticado por meio de exames de sangue ou saliva.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Existem testes rápidos que utilizam fluido oral (saliva) e sangue."
    },
    {
        id: 48,
        category: "Diagnóstico",
        question: "Todos os testes de HIV utilizam a detecção de anticorpos para o diagnóstico.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Alguns testes detectam o próprio vírus (carga viral) ou antígenos, não apenas anticorpos."
    },
    {
        id: 49,
        category: "Diagnóstico",
        question: "O diagnóstico de AIDS é baseado apenas no teste positivo para HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Ter HIV não é ter AIDS. AIDS é o estágio avançado, definido por baixa imunidade ou doenças oportunistas."
    },
    {
        id: 50,
        category: "Diagnóstico",
        question: "O teste rápido de HIV pode fornecer resultados em menos de 30 minutos.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Sim, os testes rápidos geralmente dão resultados em até 30 minutos."
    },
    {
        id: 51,
        category: "Diagnóstico",
        question: "Todas as pessoas com HIV não reagente não precisam repetir o teste.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Se houve risco recente (janela imunológica), o teste deve ser repetido após 30 dias."
    },
    {
        id: 52,
        category: "Diagnóstico",
        question: "O diagnóstico precoce de HIV aumenta significativamente a expectativa e a qualidade de vida da pessoa.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Quanto antes tratar, melhor o prognóstico e a saúde."
    },
    {
        id: 53,
        category: "Diagnóstico",
        question: "Se o primeiro teste de HIV for reagente, não é necessário fazer outro teste.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Um resultado reagente em teste rápido precisa ser confirmado com um segundo teste diferente."
    },
    {
        id: 54,
        category: "Diagnóstico",
        question: "A presença do vírus HIV no organismo significa que a pessoa tem AIDS.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "HIV é o vírus. AIDS é a doença que pode se desenvolver se o HIV não for tratado."
    },
    {
        id: 55,
        category: "Diagnóstico",
        question: "A carga viral indetectável significa que o HIV foi completamente eliminado do corpo.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O vírus está controlado e não transmite, mas ainda está latente no corpo (não há cura completa ainda)."
    },
    {
        id: 56,
        category: "Diagnóstico",
        question: "O diagnóstico de HIV pode ser feito por meio de testes moleculares que detectam o RNA viral no período agudo da infecção.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Testes de carga viral (moleculares) podem detectar o vírus mais cedo que os de anticorpos."
    },
    {
        id: 57,
        category: "Diagnóstico",
        question: "Os testes de quarta geração detectam simultaneamente antígenos virais e anticorpos, permitindo um diagnóstico mais precoce do HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Eles detectam o antígeno p24 e anticorpos, reduzindo a janela imunológica."
    },
    {
        id: 58,
        category: "Diagnóstico",
        question: "A contagem de células CD4 é um indicador direto da carga viral do HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "CD4 mede a imunidade. Carga viral mede a quantidade de vírus. São relacionados, mas coisas diferentes."
    },
    {
        id: 59,
        category: "Diagnóstico",
        question: "A janela imunológica de infecções pelo HIV pode ser encurtada com testes de quarta geração.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Sim, pois detectam o antígeno p24 que aparece antes dos anticorpos."
    },
    {
        id: 60,
        category: "Diagnóstico",
        question: "Apenas testes sorológicos são suficientes para o diagnóstico definitivo de HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O fluxograma de diagnóstico pode exigir testes confirmatórios moleculares ou western blot, dependendo do caso."
    },
    {
        id: 61,
        category: "Diagnóstico",
        question: "A resistência a medicamentos antirretrovirais pode ser identificada através de testes genotípicos do HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "A genotipagem analisa as mutações do vírus para saber quais remédios funcionam."
    },
    {
        id: 62,
        category: "Diagnóstico",
        question: "O diagnóstico de HIV deve ser confirmado com uma segunda amostra de sangue, independentemente do teste inicial ser reagente ou não reagente.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Apenas resultados reagentes (positivos) precisam de confirmação. Não reagentes, se fora da janela, são definitivos."
    },
    {
        id: 63,
        category: "Diagnóstico",
        question: "O diagnóstico de HIV em recém-nascidos expostos ao vírus deve ser realizado por meio de testes de anticorpos maternos.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Bebês têm anticorpos da mãe. O diagnóstico neles é feito por carga viral (pesquisa do vírus), não anticorpos."
    },
    {
        id: 64,
        category: "Diagnóstico",
        question: "O teste de Western Blot, considerado padrão-ouro, para confirmação do diagnóstico de HIV foi substituído por outros testes em muitos países.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Muitos países usam fluxogramas com dois testes rápidos ou imunoensaios, dispensando o Western Blot que é mais caro e demorado."
    },

    // Aconselhamento
    {
        id: 65,
        category: "Aconselhamento",
        question: "O aconselhamento para HIV deve ser sempre confidencial.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O sigilo é um direito do paciente e um dever do profissional."
    },
    {
        id: 66,
        category: "Aconselhamento",
        question: "O teste de HIV só pode ser feito com o consentimento informado da pessoa.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Ninguém pode ser testado sem saber e concordar (salvo exceções legais/médicas muito específicas)."
    },
    {
        id: 67,
        category: "Aconselhamento",
        question: "O aconselhamento para HIV só é necessário após o diagnóstico reagente.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O aconselhamento pré-teste e pós-teste (independente do resultado) é importante."
    },
    {
        id: 68,
        category: "Aconselhamento",
        question: "Pessoas que testam não reagente para o HIV não precisam de mais aconselhamento.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Devem receber aconselhamento sobre prevenção (janela imunológica, uso de preservativo, PrEP, etc)."
    },
    {
        id: 69,
        category: "Aconselhamento",
        question: "O aconselhamento em HIV deve incluir informações sobre prevenção e tratamento.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Deve ser integral, cobrindo como evitar e o que fazer se tiver o vírus."
    },
    {
        id: 70,
        category: "Aconselhamento",
        question: "O aconselhamento para HIV não deve abordar aspectos emocionais, apenas informações técnicas.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O apoio emocional é fundamental, pois o diagnóstico impacta a vida da pessoa."
    },
    {
        id: 71,
        category: "Aconselhamento",
        question: "Todas as pessoas vivendo com HIV têm o direito de recusar o tratamento antirretroviral.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O tratamento é voluntário, embora altamente recomendado. O paciente tem autonomia."
    },
    {
        id: 72,
        category: "Aconselhamento",
        question: "Somente profissionais de saúde podem oferecer aconselhamento para HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Conselheiros pares e outros profissionais treinados também podem realizar aconselhamento."
    },
    {
        id: 73,
        category: "Aconselhamento",
        question: "O aconselhamento para HIV deve ser oferecido em um ambiente privado e seguro.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Para garantir a confidencialidade e o conforto do paciente."
    },
    {
        id: 74,
        category: "Aconselhamento",
        question: "O aconselhamento para HIV é irrelevante para pessoas que já foram diagnosticadas há muito tempo.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O aconselhamento contínuo ajuda na adesão e no manejo de novas questões que surgem."
    },
    {
        id: 75,
        category: "Aconselhamento",
        question: "O consentimento informado é fundamental antes de realizar o teste de HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "A pessoa deve entender o que está sendo testado e concordar."
    },
    {
        id: 76,
        category: "Aconselhamento",
        question: "O aconselhamento para HIV pode ser feito sem seguir princípios éticos, se necessário.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "A ética (sigilo, respeito, não-maleficência) é a base do atendimento."
    },
    {
        id: 77,
        category: "Aconselhamento",
        question: "O resultado de um teste de HIV reagente deve ser imediatamente compartilhado com familiares do paciente.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O sigilo pertence ao paciente. Ele decide a quem e quando contar, exceto em casos muito específicos de parceiros sexuais (com apoio da saúde)."
    },
    {
        id: 78,
        category: "Aconselhamento",
        question: "O aconselhamento pós-teste de HIV é importante para ambos os resultados, reagente ou não reagente.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Positivo: vínculo e tratamento. Negativo: reforço da prevenção."
    },
    {
        id: 79,
        category: "Aconselhamento",
        question: "As pessoas que testam não reagente para HIV não precisam de mais nenhum teste no futuro.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Se continuarem tendo vida sexual ativa, devem testar regularmente."
    },
    {
        id: 80,
        category: "Aconselhamento",
        question: "O aconselhamento para o HIV também deve abordar aspectos emocionais e psicológicos da pessoa.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Saúde mental faz parte do cuidado integral."
    },
    {
        id: 81,
        category: "Aconselhamento",
        question: "Aconselhamento em HIV não precisa abordar a prevenção de transmissão, apenas o tratamento.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Prevenção positiva (evitar transmitir) é parte do aconselhamento."
    },
    {
        id: 82,
        category: "Aconselhamento",
        question: "Um profissional de saúde deve ser imparcial e nunca julgar o comportamento da pessoa.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "O serviço deve ser livre de julgamentos para criar vínculo e confiança."
    },
    {
        id: 83,
        category: "Aconselhamento",
        question: "Se uma pessoa recusa o teste de HIV, o profissional deve forçá-la a fazê-lo.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "O teste é voluntário. Forçar viola direitos humanos."
    },
    {
        id: 84,
        category: "Aconselhamento",
        question: "O aconselhamento para HIV deve ser adaptado às necessidades culturais e linguísticas da pessoa.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Para garantir que a pessoa compreenda e se sinta respeitada."
    },
    {
        id: 85,
        category: "Aconselhamento",
        question: "O aconselhamento para HIV envolve apenas fornecer informações sobre o vírus.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Envolve escuta, apoio, avaliação de riscos e planejamento conjunto."
    },
    {
        id: 86,
        category: "Aconselhamento",
        question: "Os profissionais do serviço de saúde devem ser treinados para fornecerem informações precisas e atualizadas sobre o HIV.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
        explanation: "Informação errada gera estigma e prejudica a prevenção/tratamento."
    },
    {
        id: 87,
        category: "Aconselhamento",
        question: "O aconselhamento pré-teste de HIV não é necessário se a pessoa parecer confiante sobre o resultado.",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
        explanation: "Mesmo confiante, a pessoa pode ter dúvidas ou conceitos errados que precisam ser abordados."
    },

    // Mitos e Curiosidades
    {
        id: 88,
        category: "Mitos e Curiosidades",
        question: "O beijo na boca, um abraço ou aperto de mão transmite HIV.",
        options: ["Mito", "Verdade"],
        answer: "Mito",
        explanation: "HIV não passa por contatos sociais, saliva, suor ou lágrimas."
    },
    {
        id: 89,
        category: "Mitos e Curiosidades",
        question: "Somente homossexuais e usuários de drogas estão em risco de contrair HIV.",
        options: ["Mito", "Verdade"],
        answer: "Mito",
        explanation: "Qualquer pessoa que tenha relações sexuais desprotegidas ou contato com sangue pode se infectar."
    },
    {
        id: 90,
        category: "Mitos e Curiosidades",
        question: "O HIV é o mesmo que a AIDS.",
        options: ["Mito", "Verdade"],
        answer: "Mito",
        explanation: "HIV é o vírus. AIDS é a doença. Nem todo mundo com HIV tem AIDS."
    },
    {
        id: 91,
        category: "Mitos e Curiosidades",
        question: "A AIDS se desenvolve se o paciente não for tratado corretamente.",
        options: ["Mito", "Verdade"],
        answer: "Verdade",
        explanation: "Sem tratamento, o vírus destrói a imunidade e a pessoa desenvolve AIDS."
    },
    {
        id: 92,
        category: "Mitos e Curiosidades",
        question: "Se uma pessoa vivendo com HIV estiver em tratamento adequado, não pode transmitir o vírus.",
        options: ["Mito", "Verdade"],
        answer: "Verdade",
        explanation: "I=I (Indetectável = Intransmissível)."
    },
    {
        id: 93,
        category: "Mitos e Curiosidades",
        question: "Uma pessoa com HIV pode não ter sintomas por muitos anos.",
        options: ["Mito", "Verdade"],
        answer: "Verdade",
        explanation: "Pode haver um longo período assintomático, por isso o teste é importante."
    },
    {
        id: 94,
        category: "Mitos e Curiosidades",
        question: "Mulheres que vivem com HIV não podem ter filhos saudáveis.",
        options: ["Mito", "Verdade"],
        answer: "Mito",
        explanation: "Com tratamento para prevenir a transmissão vertical, elas podem ter filhos livres do HIV."
    },
    {
        id: 95,
        category: "Mitos e Curiosidades",
        question: "Há tratamento eficaz para o HIV.",
        options: ["Mito", "Verdade"],
        answer: "Verdade",
        explanation: "Os antirretrovirais controlam o vírus e permitem vida normal."
    },
    {
        id: 96,
        category: "Mitos e Curiosidades",
        question: "HIV é uma sentença de morte.",
        options: ["Mito", "Verdade"],
        answer: "Mito",
        explanation: "Hoje é uma condição crônica controlável."
    },
    {
        id: 97,
        category: "Mitos e Curiosidades",
        question: "O HIV só pode ser transmitido através de relações sexuais desprotegidas.",
        options: ["Mito", "Verdade"],
        answer: "Mito",
        explanation: "Também transmite por sangue (seringas), de mãe para filho e leite materno. Mas sexo é a via principal."
    },
    {
        id: 98,
        category: "Mitos e Curiosidades",
        question: "No Brasil, o primeiro caso de HIV foi registrado em 1985, na cidade de São Paulo.",
        options: ["Mito", "Verdade"],
        answer: "Mito",
        explanation: "O primeiro caso foi identificado no início da década de 80 (geralmente citado 1982 ou 1983)."
    },
    {
        id: 99,
        category: "Mitos e Curiosidades",
        question: "O uso de preservativos é eficaz na prevenção da transmissão do HIV.",
        options: ["Mito", "Verdade"],
        answer: "Verdade",
        explanation: "É uma das barreiras mais eficazes."
    },
    {
        id: 100,
        category: "Mitos e Curiosidades",
        question: "A primeira pessoa com HIV registrada no mundo, foi a médica e pesquisadora dinamarquesa Margrethe P. Rask, que faleceu em 12 de dezembro de 1977 de AIDS.",
        options: ["Mito", "Verdade"],
        answer: "Verdade",
        explanation: "Ela é um dos primeiros casos documentados."
    },
    {
        id: 101,
        category: "Mitos e Curiosidades",
        question: "Homens circuncidados têm menor risco de contrair o HIV.",
        options: ["Mito", "Verdade"],
        answer: "Verdade",
        explanation: "Estudos mostram que a circuncisão reduz a chance de infecção heterossexual em homens, mas não elimina."
    },
    {
        id: 102,
        category: "Mitos e Curiosidades",
        question: "A Síndrome da Imunodeficiência Adquirida (AIDS) começou a preocupar autoridades de saúde pública em 1972, quando uma doença misteriosa foi registrada nos Estados Unidos.",
        options: ["Mito", "Verdade"],
        answer: "Mito",
        explanation: "A preocupação começou em 1981, com os relatos do CDC."
    },
    {
        id: 103,
        category: "Mitos e Curiosidades",
        question: "O Vírus da Imunodeficiência Humana (HIV) é um patógeno que invade facilmente as células de defesa animal e a partir daí transcreve seu próprio genoma.",
        options: ["Mito", "Verdade"],
        answer: "Verdade",
        explanation: "Ele é um retrovírus que ataca células CD4."
    },
    {
        id: 104,
        category: "Mitos e Curiosidades",
        question: "É crime fazer discriminação de pessoas vivendo com HIV e AIDS.",
        options: ["Mito", "Verdade"],
        answer: "Verdade",
        explanation: "No Brasil, a Lei 12.984/2014 torna crime a discriminação."
    },
    {
        id: 105,
        category: "Mitos e Curiosidades",
        question: "Com tratamento correto, geralmente, o paciente atinge carga viral indetectável em até 1 mês.",
        options: ["Mito", "Verdade"],
        answer: "Mito",
        explanation: "Geralmente leva de 3 a 6 meses para ficar indetectável."
    },
    {
        id: 106,
        category: "Mitos e Curiosidades",
        question: "Atualmente a infecção por HIV é considerada uma doença crônica.",
        options: ["Mito", "Verdade"],
        answer: "Verdade",
        explanation: "Com tratamento, é manejável a longo prazo como diabetes ou hipertensão."
    }
];
