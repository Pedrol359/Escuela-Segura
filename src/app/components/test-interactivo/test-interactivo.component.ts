import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-test-interactivo',
  templateUrl: './test-interactivo.component.html',
  styleUrls: ['./test-interactivo.component.css']
}) export class TestInteractivoComponent implements OnInit {

  // Sección 1
  // Validators.required

  p_1_1 = new FormGroup({
    p11: new FormControl()
  });

  p_1_2 = new FormGroup({
    p12: new FormControl()
  });

  p_1_3 = new FormGroup({
    p13: new FormControl()
  });

  p_1_4 = new FormGroup({
    p14: new FormControl()
  });

  p_1_5 = new FormGroup({
    p15: new FormControl()
  });

  p_1_6 = new FormGroup({
    p16: new FormControl()
  });

  p_1_7 = new FormGroup({
    p17: new FormControl()
  });

  p_1_8 = new FormGroup({
    p18: new FormControl()
  });

  p_1_9 = new FormGroup({
    p19: new FormControl()
  });

  p_1_10 = new FormGroup({
    p110: new FormControl()
  });

  // Sección 2
  p_2_1 = new FormGroup({
    p21: new FormControl(),
  });

  p_2_2 = new FormGroup({
    p22: new FormControl(),
  });

  p_2_3 = new FormGroup({
    p23: new FormControl(),
  });

  p_2_4 = new FormGroup({
    p24: new FormControl(),
  });

  p_2_5 = new FormGroup({
    p25: new FormControl(),
  });


  // Sección 3
  p_3_1 = new FormGroup({
    p31: new FormControl(),
  });

  p_3_2 = new FormGroup({
    p32: new FormControl(),
  });

  p_3_3 = new FormGroup({
    p33: new FormControl(),
  });

  p_3_4 = new FormGroup({
    p34: new FormControl(),
  });

  p_3_5 = new FormGroup({
    p35: new FormControl(),
  });


  // Sección 4
  p_4_1 = new FormGroup({
    p41: new FormControl(),
  });

  p_4_2 = new FormGroup({
    p42: new FormControl(),
  });

  p_4_3 = new FormGroup({
    p43: new FormControl(),
  });

  p_4_4 = new FormGroup({
    p44: new FormControl(),
  });

  p_4_5 = new FormGroup({
    p45: new FormControl(),
  });

  // Sección 5
  p_5_1 = new FormGroup({
    p51: new FormControl(),
  });

  p_5_2 = new FormGroup({
    p52: new FormControl(),
  });

  p_5_3 = new FormGroup({
    p53: new FormControl(),
  });

  p_5_4 = new FormGroup({
    p54: new FormControl(),
  });

  p_5_5 = new FormGroup({
    p55: new FormControl(),
  });

  p_5_6 = new FormGroup({
    p56: new FormControl(),
  });

  p_5_7 = new FormGroup({
    p57: new FormControl(),
  });

  constructor() {

  }

  ngOnInit(): void {

  }
  // Secciones del test
  display = 'flex';
  displayTable = 'none';
  display_patrimonial = 'none';
  display_fisica = 'none';
  display_economica = 'none';
  display_sexual = 'none';
  display_result = 'none';
  // Resultado test
  res_emocional = 'none';
  res_patrimonial = 'none';
  res_fisica = 'none';
  res_economica = 'none';
  res_sexual = 'none';
  res_ninguno = 'none';

  close() {
    this.display = 'none';
    this.displayTable = 'block';
  }

  seccion2() {
    this.displayTable = 'none';
    this.display_patrimonial = 'block';
  }

  seccion3() {
    this.display_patrimonial = 'none';
    this.display_fisica = 'block';
  }

  seccion4() {
    this.display_fisica = 'none';
    this.display_economica = 'block';
  }

  seccion5() {
    this.display_economica = 'none';
    this.display_sexual = 'block';
  }


  reiniciarTest() {
    this.display = 'flex';
    this.displayTable = 'none';
    this.display_patrimonial = 'none';
    this.display_fisica = 'none';
    this.display_economica = 'none';
    this.display_sexual = 'none';
    this.display_result = 'none';
  }

  show_results() {

    this.display_sexual = 'none';
    this.display_result = 'block';

    var suma_emocional =
      [
        this.p_1_1.get('p11')?.value +
        this.p_1_2.get('p12')?.value +
        this.p_1_3.get('p13')?.value +
        this.p_1_4.get('p14')?.value +
        this.p_1_5.get('p15')?.value +
        this.p_1_6.get('p16')?.value +
        this.p_1_7.get('p17')?.value +
        this.p_1_8.get('p18')?.value +
        this.p_1_9.get('p19')?.value +
        this.p_1_10.get('p110')?.value
      ];

    var suma_patrimonial =
      [
        this.p_2_1.get('p21')?.value +
        this.p_2_2.get('p22')?.value +
        this.p_2_3.get('p23')?.value +
        this.p_2_4.get('p24')?.value +
        this.p_2_5.get('p25')?.value
      ];

    var suma_fisica =
      [
        this.p_3_1.get('p31')?.value +
        this.p_3_2.get('p32')?.value +
        this.p_3_3.get('p33')?.value +
        this.p_3_4.get('p34')?.value +
        this.p_3_5.get('p35')?.value
      ];

    var suma_economica =
      [
        this.p_4_1.get('p41')?.value +
        this.p_4_2.get('p42')?.value +
        this.p_4_3.get('p43')?.value +
        this.p_4_4.get('p44')?.value +
        this.p_4_5.get('p45')?.value
      ];

    var suma_sexual =
      [
        this.p_5_1.get('p51')?.value +
        this.p_5_2.get('p52')?.value +
        this.p_5_3.get('p53')?.value +
        this.p_5_4.get('p54')?.value +
        this.p_5_5.get('p55')?.value +
        this.p_5_6.get('p56')?.value +
        this.p_5_7.get('p57')?.value
      ];

    console.log(suma_emocional[0]);
    console.log(suma_patrimonial[0]);
    console.log(suma_fisica[0]);
    console.log(suma_economica[0]);
    console.log(suma_sexual[0]);


    // Si no sufre ningun tipo de violencia
    if (suma_emocional[0] < 25 && suma_patrimonial[0] < 15 && suma_fisica[0] < 15 && suma_sexual[0] < 18) {
      this.res_ninguno = 'block';
    }

    if (suma_emocional[0] >= 25) {
      this.res_ninguno = 'none';
      this.res_emocional = 'block';
    }

    if (suma_patrimonial[0] >= 15) {
      this.res_ninguno = 'none';
      this.res_patrimonial = 'block';
    }

    if (suma_fisica[0] >= 15) {
      this.res_ninguno = 'none';
      this.res_fisica = 'block';
    }

    if (suma_economica[0] >= 15) {
      this.res_ninguno = 'none';
      this.res_economica = 'block';
    }

    if (suma_sexual[0] >= 18) {
      this.res_ninguno = 'none';
      this.res_sexual = 'block';
    }

  }
}
