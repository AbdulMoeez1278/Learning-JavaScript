// insertAdjacentHTML | insertAdjacentElement | insertAdjacentText

// insertAdjacentHTML

// 1: beforebegin Method // Insert HTML immediately before Element
first.insertAdjacentHTML("beforebegin", '<div class="test">beforebegin</div>');

// 2: afterbegin Method // Insert HTML into Element at the begining
first.insertAdjacentHTML("afterbegin", '<div class="test">afterbegin</div>');

// 3: beforeend Method // Insert HTML into Element at the end
first.insertAdjacentHTML("beforeend", '<div class="test">beforeend</div>');

// 4: afterend Method // Insert HTML immediately after Element
first.insertAdjacentHTML("afterend", '<div class="test">afterend</div>');
