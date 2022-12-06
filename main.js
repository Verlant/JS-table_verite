const NEW_MAIN = document.createElement("main"); // crée un élément <main>
const NEW_TABLE = document.createElement("table"); // crée un élément <table>

document.body.prepend(NEW_MAIN); // ajoute l'élément new_main au body en premier enfant
NEW_MAIN.append(NEW_TABLE); // ajoute l'élément new_table au body en dernier enfant

let a;
let b;

/**
 * Créé un tableau et si il en existe deja un, supprime les tr et td pour en créer de nouvelles
 * @param {int} row
 * @param {int} column
 */
function table_creation(row, column) {
  if (!NEW_TABLE.hasChildNodes()) {
    for (let index = 0; index < row; index++) {
      const new_tr = document.createElement("tr");
      NEW_TABLE.append(new_tr);
      for (let index = 0; index < column; index++) {
        const new_td = document.createElement("td");
        new_tr.append(new_td);
      }
    }
  } else {
    while (NEW_TABLE.hasChildNodes()) {
      NEW_TABLE.removeChild(NEW_TABLE.lastChild);
    }
    table_creation(row, column);
  }
}

/**
 * Test une expression booleenne et renvoie 1 pour vrai ou 0 pour faux
 * @param {bool} a
 * @param {bool} b
 * @returns int
 */
function non_A_et_B(a, b) {
  if (!(a && b)) {
    return 1;
  } else {
    return 0;
  }
}
/**
 * Test une expression booleenne et renvoie 1 pour vrai ou 0 pour faux
 * @param {bool} a
 * @param {bool} b
 * @returns int
 */
function non_A_ou_B(a, b) {
  if (!(a || b)) {
    return 1;
  } else {
    return 0;
  }
}
/**
 * Test une expression booleenne et renvoie 1 pour vrai ou 0 pour faux
 * @param {bool} a
 * @param {bool} b
 * @returns int
 */
function nonA_et_B(a, b) {
  if (!a && b) {
    return 1;
  } else {
    return 0;
  }
}
/**
 * Test une expression booleenne et renvoie 1 pour vrai ou 0 pour faux
 * @param {bool} a
 * @param {bool} b
 * @returns int
 */
function nonA_ou_B(a, b) {
  if (!a || b) {
    return 1;
  } else {
    return 0;
  }
}
/**
 * Test une expression booleenne et renvoie 1 pour vrai ou 0 pour faux
 * @param {bool} a
 * @returns int
 */
function nonB(b) {
  if (!b) {
    return 1;
  } else {
    return 0;
  }
}
/**
 * Test une expression booleenne et renvoie 1 pour vrai ou 0 pour faux
 * @param {bool} a
 *  @param {bool} b
 * @returns int
 */
function nonB_et_nonA(a, b) {
  if (!b && !a) {
    return 1;
  } else {
    return 0;
  }
}
/**
 * Test une expression booleenne et renvoie 1 pour vrai ou 0 pour faux
 * @param {bool} a
 *  @param {bool} b
 * @returns int
 */
function nonB_ou_nonA(a, b) {
  if (!b || !a) {
    return 1;
  } else {
    return 0;
  }
}
/**
 * Test une expression booleenne et renvoie 1 pour vrai ou 0 pour faux
 * @param {bool} a
 *  @param {bool} b
 * @returns int
 */
function A_et_nonB(a, b) {
  if (a && !b) {
    return 1;
  } else {
    return 0;
  }
}
/**
 * Test une expression booleenne et renvoie 1 pour vrai ou 0 pour faux
 * @param {bool} a
 *  @param {bool} b
 * @returns int
 */
function A_ou_nonB(a, b) {
  if (a || !b) {
    return 1;
  } else {
    return 0;
  }
}

function add_var() {
  table_creation(5, 11);
  NEW_TABLE.rows[0].cells[0].innerHTML = "A";
  NEW_TABLE.rows[0].cells[1].innerHTML = "B";
  NEW_TABLE.rows[0].cells[2].innerHTML = "Non( A et B )";
  NEW_TABLE.rows[0].cells[3].innerHTML = "Non( A ou B )";
  NEW_TABLE.rows[0].cells[4].innerHTML = "Non( A ) et B";
  NEW_TABLE.rows[0].cells[5].innerHTML = "Non( A ) ou B";
  NEW_TABLE.rows[0].cells[6].innerHTML = "Non( B )";
  NEW_TABLE.rows[0].cells[7].innerHTML = "Non( B ) et Non( A )";
  NEW_TABLE.rows[0].cells[8].innerHTML = "Non( B ) ou Non( A )";
  NEW_TABLE.rows[0].cells[9].innerHTML = "A et Non( B )";
  NEW_TABLE.rows[0].cells[10].innerHTML = "A ou Non( B )";
  NEW_TABLE.rows[1].cells[0].innerHTML = "0";
  NEW_TABLE.rows[2].cells[0].innerHTML = "0";
  NEW_TABLE.rows[3].cells[0].innerHTML = "1";
  NEW_TABLE.rows[4].cells[0].innerHTML = "1";
  NEW_TABLE.rows[1].cells[1].innerHTML = "0";
  NEW_TABLE.rows[2].cells[1].innerHTML = "1";
  NEW_TABLE.rows[3].cells[1].innerHTML = "0";
  NEW_TABLE.rows[4].cells[1].innerHTML = "1";
  for (let i = 1; i < NEW_TABLE.rows.length; i++) {
    if (i == 1) {
      a = false;
      b = false;
      NEW_TABLE.rows[i].cells[2].innerHTML = non_A_et_B(a, b);
      NEW_TABLE.rows[i].cells[3].innerHTML = non_A_ou_B(a, b);
      NEW_TABLE.rows[i].cells[4].innerHTML = nonA_et_B(a, b);
      NEW_TABLE.rows[i].cells[5].innerHTML = nonA_ou_B(a, b);
      NEW_TABLE.rows[i].cells[6].innerHTML = nonB(b);
      NEW_TABLE.rows[i].cells[7].innerHTML = nonB_et_nonA(a, b);
      NEW_TABLE.rows[i].cells[8].innerHTML = nonB_ou_nonA(a, b);
      NEW_TABLE.rows[i].cells[9].innerHTML = A_et_nonB(a, b);
      NEW_TABLE.rows[i].cells[10].innerHTML = A_ou_nonB(a, b);
    } else if (i == 2) {
      b = true;
      NEW_TABLE.rows[i].cells[2].innerHTML = non_A_et_B(a, b);
      NEW_TABLE.rows[i].cells[3].innerHTML = non_A_ou_B(a, b);
      NEW_TABLE.rows[i].cells[4].innerHTML = nonA_et_B(a, b);
      NEW_TABLE.rows[i].cells[5].innerHTML = nonA_ou_B(a, b);
      NEW_TABLE.rows[i].cells[6].innerHTML = nonB(b);
      NEW_TABLE.rows[i].cells[7].innerHTML = nonB_et_nonA(a, b);
      NEW_TABLE.rows[i].cells[8].innerHTML = nonB_ou_nonA(a, b);
      NEW_TABLE.rows[i].cells[9].innerHTML = A_et_nonB(a, b);
      NEW_TABLE.rows[i].cells[10].innerHTML = A_ou_nonB(a, b);
    } else if (i == 3) {
      a = true;
      b = false;
      NEW_TABLE.rows[i].cells[2].innerHTML = non_A_et_B(a, b);
      NEW_TABLE.rows[i].cells[3].innerHTML = non_A_ou_B(a, b);
      NEW_TABLE.rows[i].cells[4].innerHTML = nonA_et_B(a, b);
      NEW_TABLE.rows[i].cells[5].innerHTML = nonA_ou_B(a, b);
      NEW_TABLE.rows[i].cells[6].innerHTML = nonB(b);
      NEW_TABLE.rows[i].cells[7].innerHTML = nonB_et_nonA(a, b);
      NEW_TABLE.rows[i].cells[8].innerHTML = nonB_ou_nonA(a, b);
      NEW_TABLE.rows[i].cells[9].innerHTML = A_et_nonB(a, b);
      NEW_TABLE.rows[i].cells[10].innerHTML = A_ou_nonB(a, b);
    } else {
      a = true;
      b = true;
      NEW_TABLE.rows[i].cells[2].innerHTML = non_A_et_B(a, b);
      NEW_TABLE.rows[i].cells[3].innerHTML = non_A_ou_B(a, b);
      NEW_TABLE.rows[i].cells[4].innerHTML = nonA_et_B(a, b);
      NEW_TABLE.rows[i].cells[5].innerHTML = nonA_ou_B(a, b);
      NEW_TABLE.rows[i].cells[6].innerHTML = nonB(b);
      NEW_TABLE.rows[i].cells[7].innerHTML = nonB_et_nonA(a, b);
      NEW_TABLE.rows[i].cells[8].innerHTML = nonB_ou_nonA(a, b);
      NEW_TABLE.rows[i].cells[9].innerHTML = A_et_nonB(a, b);
      NEW_TABLE.rows[i].cells[10].innerHTML = A_ou_nonB(a, b);
    }
  }
}

add_var();
