import React from 'react';

import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';

const Faq = () => {

    const faqCategories = [
        {
          category: 'Placing an Order',
          questions: [
            {
              question: 'How can I place an order?',
              answer: 'To place an order, simply browse our products, add the desired items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.',
            },
            // Add more questions for this category if needed
          ],
        },
        {
          category: 'Payment Methods',
          questions: [
            {
              question: 'What payment methods do you accept?',
              answer: 'We accept various payment methods, including credit/debit cards, PayPal, and other secure payment gateways. Choose your preferred method during the checkout process.',
            },
            // Add more questions for this category if needed
          ],
        },]
    const faqData = [
        {
            question: 'How can I place an order?',
            answer: 'To place an order, simply browse our products, add the desired items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept various payment methods, including credit/debit cards, PayPal, and other secure payment gateways. Choose your preferred method during the checkout process.',
        },
        {
            question: 'How can I track my order?',
            answer: 'Once your order is shipped, you will receive a confirmation email with a tracking number. Use this tracking number to monitor the status and location of your package.',
        },
        {
            question: 'Do you offer international shipping?',
            answer: 'Yes, we offer international shipping to many countries. During checkout, enter your shipping address, and the available shipping options will be displayed.',
        },
        {
            question: 'What is your return policy?',
            answer: 'Our return policy allows you to return products within 30 days of purchase. Ensure the items are in their original condition and packaging. Contact our customer support for return instructions.',
        },
        {
            question: 'Are my payment details secure?',
            answer: 'Yes, we take the security of your payment information seriously. Our website uses encryption and secure protocols to ensure that your payment details are protected.',
        },
        {
            question: 'Can I modify my order after placing it?',
            answer: 'Unfortunately, we cannot modify orders once they are placed to ensure fast processing and shipping. Please review your order carefully before confirming your purchase.',
        },
        {
            question: 'How can I contact customer support?',
            answer: 'You can contact our customer support team through the "Contact Us" page on our website or by sending an email to support@example.com. We aim to respond within 24 hours.',
        },
        {
            question: 'Do you offer gift wrapping services?',
            answer: 'Yes, we offer gift wrapping services for an additional fee. You can select this option during the checkout process and add a personalized message to your gift.',
        },
        {
            question: 'Are there discounts for bulk orders?',
            answer: 'Yes, we provide discounts for bulk orders. Please contact our sales team at sales@example.com for more information and a custom quote.',
        },
    ];
    return (
      <div>

      <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Frequently Asked Questions Category wise</h1>
    
        <Accordion allowZeroExpanded>
          {faqCategories.map((category, index) => (
            <AccordionItem key={index} className="border-b pb-4">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                <AccordionItemHeading>
                  <AccordionItemButton>{category.category}</AccordionItemButton>
                </AccordionItemHeading>
              </h2>
              <AccordionItemPanel>
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    
      <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Frequently Asked Questions</h1>
    
        <Accordion allowZeroExpanded>
          {faqData.map((faq, index) => (
            <AccordionItem key={index} className="border-b pb-4">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                <AccordionItemHeading>
                  <AccordionItemButton>{faq.question}</AccordionItemButton>
                </AccordionItemHeading>
              </h2>
              <AccordionItemPanel>
                <p className="text-gray-600">{faq.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    
    </div>
    
    );
};

export default Faq;