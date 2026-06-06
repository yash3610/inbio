(function () {
    'use strict';

    var emailJsConfig = {
        serviceId: 'service_kbl7uj2',
        templateId: 'template_dopjl95',
        publicKey: 'pxU-sDmubkcOkaA3H'
    };

    var form = document.getElementById('contact-form');
    var submitButton = document.getElementById('submit');
    var submitLabel = submitButton ? submitButton.querySelector('span') : null;
    var status = document.getElementById('contact-form-status');

    if (!form || !submitButton || !submitLabel || !status) {
        return;
    }

    function setStatus(message, type) {
        status.textContent = message;
        status.className = 'contact-form-status ' + type;
    }

    function setSubmitting(isSubmitting) {
        submitButton.disabled = isSubmitting;
        submitLabel.textContent = isSubmitting ? 'SENDING...' : 'SEND MESSAGE';
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        setStatus('', '');

        if (!form.checkValidity()) {
            form.reportValidity();
            setStatus('Please complete all required fields correctly.', 'error-msg');
            return;
        }

        if (!emailJsConfig.serviceId || !emailJsConfig.publicKey) {
            setStatus('Contact form setup is not complete yet. Please try again later.', 'error-msg');
            return;
        }

        if (!window.emailjs) {
            setStatus('The email service could not be loaded. Please refresh and try again.', 'error-msg');
            return;
        }

        setSubmitting(true);

        window.emailjs.sendForm(
            emailJsConfig.serviceId,
            emailJsConfig.templateId,
            form,
            { publicKey: emailJsConfig.publicKey }
        ).then(function () {
            form.reset();
            setStatus('Thank you! Your message has been sent successfully.', 'success-msg');
        }).catch(function () {
            setStatus('Sorry, your message could not be sent. Please try again.', 'error-msg');
        }).finally(function () {
            setSubmitting(false);
        });
    });
}());
