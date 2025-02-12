// Data for each service category (HTML content)
const serviceData = {
  "extensions": `
    <h2 id="modal-heading">Extensions</h2>
    <table>
      <tr><th>Service</th><th>Price / Time</th></tr>
      <tr>
        <td>I-tip Extensions<br><small>Price varies ・ 30 min</small></td>
        <td>&nbsp;</td>
      </tr>
      <tr><td>Installation Per Bundle</td><td>$150.00 ・ 30 min</td></tr>
      <tr><td>Move-up Per Bundle</td><td>$60.00 ・ 30 min</td></tr>
      <tr><td>Move-up 9+ Weeks</td><td>$75.00 ・ 30 min</td></tr>
      <tr><td>Removal per hour</td><td>$100.00 ・ 30 min</td></tr>
      <tr><td>Detangle, De-matting, Removal</td><td>$150.00 ・ 30 min</td></tr>
      <tr>
        <td>K-tip Extensions<br><small>Price varies ・ 30 min+</small></td>
        <td>&nbsp;</td>
      </tr>
      <tr><td>Installation Half Pack</td><td>$150.00 ・ 30 min</td></tr>
      <tr><td>Install 1 Pack</td><td>$300.00 ・ 1 hr</td></tr>
      <tr><td>Install 2 Packs</td><td>$600.00 ・ 1 hr 30 min</td></tr>
      <tr><td>Install 3 Packs</td><td>$900.00 ・ 2 hr</td></tr>
      <tr><td>Install 4 Packs</td><td>$1,200.00 ・ 2 hr 15 min</td></tr>
      <tr>
        <td>Tape-In Extensions<br><small>Price varies ・ 45 min+</small></td>
        <td>&nbsp;</td>
      </tr>
      <tr><td>Installation Full Pack</td><td>$200.00 ・ 45 min</td></tr>
      <tr><td>Move-Up Full Pack</td><td>$200.00 ・ 1 hr</td></tr>
      <tr><td>Removal per hour</td><td>$100.00 ・ 1 hr</td></tr>
      <tr>
        <td>Volume Weft Extensions<br><small>Price varies ・ 30 min+</small></td>
        <td>&nbsp;</td>
      </tr>
      <tr><td>Install 1 Row</td><td>$250.00 ・ 1 hr</td></tr>
      <tr><td>Install Additional Row</td><td>$150.00 ・ 30 min</td></tr>
      <tr><td>Move-up 1 Row</td><td>$75.00 ・ 30 min</td></tr>
      <tr><td>Move-up 2 Rows</td><td>$150.00 ・ 45 min</td></tr>
      <tr><td>Move-up 3 Rows</td><td>$225.00 ・ 1 hr 10 min</td></tr>
    </table>`,
  "hair-coloring": `
    <h2 id="modal-heading">Hair Coloring</h2>
    <table>
      <tr><th>Service</th><th>Price / Time</th></tr>
      <tr><td>Root Touch-Up + Blowdry</td><td>$175.00 ・ 1 hr 15 min</td></tr>
      <tr><td>Touch-up Partial Highlights + Toner + Blowdry</td><td>$225.00 ・ 1 hr 50 min</td></tr>
      <tr><td>Touch-up Full Highlights + Toner + Blowdry</td><td>$300.00 ・ 2 hr 10 min</td></tr>
      <tr><td>All Over Color + Blowdry</td><td>$200.00 ・ 2 hr 10 min</td></tr>
      <tr><td>All Over Bleach + Toner + Blowdry</td><td>$300.00 ・ 3 hr</td></tr>
      <tr><td>Demi Permanent Glaze + Blowdry</td><td>$175.00 ・ 1 hr</td></tr>
      <tr><td>Face Framing Highlights + Toner + Blowdry</td><td>$175.00 ・ 2 hr 30 min</td></tr>
      <tr><td>Partial Highlights + Toner + Blowdry</td><td>$250.00 ・ 2 hr 30 min</td></tr>
      <tr><td>Full Highlights + Toner + Blowdry</td><td>$350.00 ・ 3 hr</td></tr>
      <tr>
        <td>Bleach Touch Up + Toner + Blowdry<br><small>Options: Lux: $200.00 ・ 2 hr<br>Lox: $175.00 ・ 2 hr</small></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Toner/Vivids Overlay<br><small>Price varies ・ 45 min<br>Options: Lux: $85.00 ・ 45 min<br>Lox: $70.00 ・ 45 min</small></td>
        <td>&nbsp;</td>
      </tr>
    </table>`,
  "hair-texture": `
    <h2 id="modal-heading">Hair Texture</h2>
    <table>
      <tr><th>Service</th><th>Price / Time</th></tr>
      <tr>
        <td>Keratin Complex Smoothing Treatment<br><small>Price varies ・ 1 hr 10 min+</small></td>
        <td>&nbsp;</td>
      </tr>
      <tr><td>Regular</td><td>$250.00 ・ 1 hr 10 min</td></tr>
      <tr><td>Lox</td><td>$200.00 ・ 1 hr 30 min</td></tr>
    </table>`,
  "haircuts-styling": `
    <h2 id="modal-heading">Haircuts & Styling</h2>
    <table>
      <tr><th>Service</th><th>Price / Time</th></tr>
      <tr><td>Haircut including shampoo + blowdry</td><td>$75.00 - $95.00 ・ 55 min</td></tr>
      <tr><td>Styling (No Wash) - Flat Iron, Waves, Curls</td><td>$50.00 ・ 30 min</td></tr>
      <tr><td>Add-on Haircut to Service</td><td>$65.00 ・ 30 min</td></tr>
      <tr>
        <td>Up-do / Down-do / Curling / Braiding<br><small>Price varies ・ 45 min+<br>Options: Lux: $85.00 ・ 1 hr 15 min<br>Lox: $65.00 ・ 45 min</small></td>
        <td>&nbsp;</td>
      </tr>
      <tr><td>Oligo Smart Bond Hair Treatment</td><td>$100.00 ・ 1 hr 5 min</td></tr>
    </table>`,
  "consultations": `
    <h2 id="modal-heading">Consultations</h2>
    <table>
      <tr><th>Service</th><th>Price / Time</th></tr>
      <tr><td>New Client Consultation</td><td>$50.00 ・ 30 min</td></tr>
      <tr><td>Hair Extension Consultation</td><td>$50.00 ・ 25 min</td></tr>
    </table>`
};

// Modal functionality
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');
const modalBody = document.getElementById('modal-body');
const closeBtn = modal.querySelector('.close');

let lastFocusedElement; // Store the element that triggered the modal

// Utility: Get all focusable elements within a container
function getFocusableElements(element) {
  return element.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
}

// Open modal when a card is clicked or activated via keyboard
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    openModal(card);
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card);
    }
  });
});

function openModal(triggerElement) {
  lastFocusedElement = triggerElement;
  const category = triggerElement.getAttribute('data-category');
  modalBody.innerHTML = serviceData[category] || '<p>Details coming soon.</p>';
  modal.style.display = 'block';
  // Set focus to modal content for accessibility
  modalContent.focus();
  // Add event listener for focus trap
  document.addEventListener('keydown', trapTabKey);
}

function closeModal() {
  modal.style.display = 'none';
  // Return focus to the element that triggered the modal
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
  // Remove focus trap listener
  document.removeEventListener('keydown', trapTabKey);
}

// Close modal on close button click or clicking outside modal content
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on pressing Esc key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});

// Focus trap: keep focus within modal when open
function trapTabKey(e) {
  if (e.key !== 'Tab') return;
  const focusableElements = getFocusableElements(modalContent);
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  if (e.shiftKey) {
    // Shift + Tab
    if (document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    }
  } else {
    // Tab
    if (document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
}
