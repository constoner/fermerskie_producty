// Временные данные для заполнения карточек

const featuresList = [
    {
        id: 0,
        title: 'Еда намного вкуснее',
        text: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
        type: 'Фермерские продукты',
        isBad: false,
        image: require('./../assets/feature-eat.svg').default,
    }, 
    {
        id: 1,
        title: 'Просроченные продукты',
        text: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
        type: 'Магазинные продукты',
        isBad: true,
        image: require('./../assets/feature-overdue.svg').default,
    }, 
    {
        id: 2,
        title: 'Натуральные продукты',
        text: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений',
        type: 'Фермерские продукты',
        isBad: false,
        image: require('./../assets/feature-organic.svg').default,
    }, 
    {
        id: 3,
        title: 'Некачественное мясо',
        text: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
        type: 'Магазинные продукты',
        isBad: true,
        image: require('./../assets/feature-meat.svg').default,
    }, 
]

export default featuresList;