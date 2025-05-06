// Privacy Policy Overlay JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create privacy policy overlay element
    const overlay = document.createElement('div');
    overlay.className = 'privacy-policy-overlay';
    overlay.id = 'privacyPolicyOverlay';
    
    // Create content container
    const content = document.createElement('div');
    content.className = 'privacy-policy-content';
    
    // Create close button
    const closeBtn = document.createElement('span');
    closeBtn.className = 'privacy-policy-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = function() {
        document.getElementById('privacyPolicyOverlay').style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    // Add privacy policy content
    content.innerHTML = `
        <h1>Privacy Policy</h1>
        <h2>Last Updated: April 15, 2025</h2>
        <p>Thank you for visiting our website. Global Legacy Team ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        
        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul>
            <li>Fill out forms on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Register for an account</li>
            <li>Contact us</li>
        </ul>
        <p>This information may include:</p>
        <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Demographic information</li>
        </ul>
        
        <h3>Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
        <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Pages visited</li>
            <li>Time and date of your visit</li>
            <li>Time spent on pages</li>
        </ul>
        
        <h2>How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including:</p>
        <ul>
            <li>Providing and maintaining our website</li>
            <li>Improving our website and user experience</li>
            <li>Communicating with you about products, services, and promotions</li>
            <li>Responding to your inquiries and requests</li>
            <li>Analyzing usage patterns and trends</li>
            <li>Protecting against unauthorized access</li>
        </ul>
        
        <h2>Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        
        <h2>Third-Party Disclosure</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.</p>
        
        <h2>Data Security</h2>
        <p>We implement reasonable security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        
        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
            <li>The right to access personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
        </ul>
        
        <h2>Children's Privacy</h2>
        <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
        
        <h2>Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <ul>
            <li>Email: privacy@globallegacyteam.com</li>
            <li>Phone: (555) 123-4567</li>
        </ul>
    `;
    
    // Assemble overlay
    content.prepend(closeBtn);
    overlay.appendChild(content);
    document.body.appendChild(overlay);
    
    // Add click event to privacy policy link
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('privacy-policy-link')) {
            e.preventDefault();
            document.getElementById('privacyPolicyOverlay').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
    
    // Close overlay when clicking outside content
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close overlay with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'block') {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
