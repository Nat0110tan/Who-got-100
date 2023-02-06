'use strict';
const p0 = document.querySelector('.player--0');
const p1 =document.querySelector('.player--1');
const s0 = document.querySelector('#score--0');
const s1 = document.querySelector('#score--1');

const di = document.querySelector('.dice');
const bn = document.querySelector('.btn--new');
const br = document.querySelector('.btn--roll');
const bh = document.querySelector('.btn--hold'); 

const c0 = document.querySelector('#current--0');
const c1 = document.querySelector('#current--1');


let cur, a, scores,con;
const ini = function(){
  scores = [0,0];
  s0.textContent = 0;
  s1.textContent = 0;
  c1.textContent =0;
  c0.textContent =0;

  con = true;
  di.classList.add('hidden');
  cur = 0;
  a = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
};
ini();

const s = function(){
  document.getElementById(`current--${a}`).textContent = 0;
    cur = 0;
    a = a ===0 ? 1 : 0;
    p0.classList.toggle('player--active');
    p1.classList.toggle('player--active');
};

br.addEventListener('click',function(){
  if(con){
    const n = Math.trunc(Math.random()*6) +1;
    di.classList.remove('hidden');
    di.src = `dice-${n}.png`;
    if(n === 1){
      s();
    }else{
      cur += n;
      document.getElementById(`current--${a}`).textContent = cur;
    }
  }
});

bh.addEventListener('click', function(){
  if(con){
    scores[a] += cur;
    document.getElementById(`score--${a}`).textContent =scores[a];
  
    if(scores[a] > 100) {
      con = false;
      document.querySelector(`.player--${a}`).classList.add('player--winner');
      document.querySelector(`.player--${a}`).classList.remove('active');
      di.classList.add('hidden');
    }
    s();
  }
});

bn.addEventListener('click',function(){
  ini();
});




