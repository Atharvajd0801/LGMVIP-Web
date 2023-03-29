function publishToTable() {
    const name = document.getElementById('exampleInputName').value;
    const contactno = document.getElementById('exampleInputcontact').value;
    const username = document.getElementById('exampleInputUsername').value;
    const password = document.getElementById('exampleInputPassword').value;
    const error = document.getElementById('error');
    event.preventDefault();

        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const nameEle = document.createElement('td');
        const contactEle = document.createElement('td');
        const usernameEle = document.createElement('td');
        nameEle.innerHTML = name;
        contactEle.innerHTML = contactno;
        usernameEle.innerHTML = username;
        trElement.appendChild(nameEle);
        trElement.appendChild(contactEle);
        trElement.appendChild(usernameEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }