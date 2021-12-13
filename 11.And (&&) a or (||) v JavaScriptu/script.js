// Jmenuji se Taras a zároveň bydlím v okolí Prahy

// true = jmenuji se Taras a jsem z Prahy
// false = jmenuji se Taras a jsem z Ostravy
// false = jmenuji se Petr a jsem z Prahy
// false = jmenuji se Petr a jsem z Ostravy

&& - zároveň

Jmenuji se Taras a zároveň jsem starší 18 let

if (ageTaras > 18 && ageTaras < 45){
	// když obě dvě jsou pravdivé
} else {
	// když je jedna z nich nepravdivá,// obě jsou nepravdivé
}

// Jmenuji se Taras nebo bydlím v Praze

// true = jmenuji se Taras a jsem z Prahy
// true = jmenuji se Taras a jsem z Ostravy
// true = jmenuji se Petr a jsem z Prahy
// false = jmenuji se Petr a jsem z Ostravy

|| - nebo

Jmenuji se Taras nebo jsem starší 18 let

if(nameDavid == "David" || ageDavid > 18){
	// když jsou obě pravda
	// když je alespoň jedna z nich pravda
} else {
	// když jsou obě nepravda
}
