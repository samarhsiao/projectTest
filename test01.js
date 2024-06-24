// There is an array, each item has such format:
// {firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
// profession: ‘xxx’}
// lastName, note can be empty, customerID can only be a set of digital
// numbers.
// profession can only have ‘student’, ‘freelancer’, ‘productOwner’,
// ‘engineer’ or ‘systemAnalytics’.

// Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’)
// to sort this array and print it out.

function sortUserName(user) {

    const updatedArray = user.reduce((acc, cur) => {
        const isNumber = typeof (cur.customerID * 1) === 'number' ? true : false;
        const isProfessionValid = ['student', 'freelancer', 'productOwner',
            'engineer', 'systemAnalytics'].some(v => v === cur.profession);
        const isFirstNameValid = cur.firstName ? true : false;
        if (isFirstNameValid && isNumber && isProfessionValid) {
            acc.push(cur);
        }
        return acc;
    }, []);
    updatedArray.sort((a, b) => {
        let itemA = `${a.firstName}${a.lastName}${a.customerID}`;
        let itemB = `${b.firstName}${b.lastName}${b.customerID}`;
        if (itemA > itemB) {
            return 1;
        } else if (itemA < itemB) {
            return -1;
        } return 0;
    });
    console.log(updatedArray);
}


// Q2. Please sort by ‘profession’ to follow the principle.
// (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
// ‘student’’)

function sortByType(user) {
    const systemAnalytics = user.filter(v => v.profession === 'systemAnalytics');
    const engineer = user.filter(v => v.profession === 'engineer');
    const productOwner = user.filter(v => v.profession === 'productOwner');
    const freelancer = user.filter(v => v.profession === 'freelancer');
    const student = user.filter(v => v.profession === 'student');
    const res = systemAnalytics.concat(engineer).concat(productOwner).concat(freelancer).concat(student)
    console.log(res)
}