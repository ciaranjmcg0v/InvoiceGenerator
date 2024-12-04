# **InvoiceGenerator App**  
An intuitive and efficient invoice management app built with **React Native**, leveraging the power of **NativeWind**, **Zustand**, **Expo Router**, and **Stripe** for seamless styling, state management, navigation, and payment processing.  

## **Features**  
- 📜 **Create & Manage Invoices**: Effortlessly generate professional invoices with customizable fields.  
- 🎨 **Tailwind-inspired Styling**: Simplified styling using NativeWind.  
- 🚦 **Smooth Navigation**: Modular and scalable routing with Expo Router.  
- 💳 **Secure Payments**: Integration with Stripe for managing payments.  
- ⚡ **Fast State Updates**: Zustand for lightweight and reactive state management.  

---

## **Tech Stack**  

### **Core Frameworks & Libraries**  
- **React Native**: Cross-platform development for iOS and Android.  
- **Expo**: Simplified development, testing, and deployment.  

### **Key Tools**  
1. **NativeWind**  
   - Utility-first styling, inspired by TailwindCSS.  
   - Write responsive, modern styles with class-based syntax.  

2. **Zustand**  
   - Lightweight, scalable state management solution.  
   - Ideal for managing app state like invoices and user data.  

3. **Expo Router**  
   - File-based routing for Expo and React Native projects.  
   - Makes navigation intuitive and dynamic.  

4. **Stripe**  
   - Manage secure payments and handle financial transactions effortlessly.  

---

## **Installation**  

### **Prerequisites**  
- Node.js installed on your machine.  
- Expo CLI installed globally (`npm install -g expo-cli`).  
- A Stripe account for API keys.  

### **Steps**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/ciaranjmcg0v/InvoiceGenerator.git
   cd invoice-generator
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Start the development server:  
   ```bash
   expo start
   ```  

4. Use a simulator/emulator or scan the QR code with the Expo Go app on your device.  

---

## **Configuration**  

### **Stripe Setup**  
1. Add your Stripe **Publishable Key** and **Secret Key** to a `.env` file:  
   ```env
   STRIPE_PUBLISHABLE_KEY=your_publishable_key
   STRIPE_SECRET_KEY=your_secret_key
   ```  

2. Ensure you’ve set up webhooks on your Stripe dashboard to manage events like successful payments.  

---

## **Project Structure**  

```plaintext
📂 InvoiceGenerator/
├── 📁 components            # Reusable UI components for various screens
│   ├── 📄 Button.tsx
│   ├── 📄 Container.tsx
│   ├── 📄 CustomTextInput.tsx
│   ├── 📄 EditScreenInfo.tsx
│   ├── 📄 KeyboardAwareScrollView.tsx
│   └── 📄 ScreenContent.tsx
├── 📁 app                    # Screens for different app views (pages) and navigation
│   ├── 📄 +html.tsx
│   ├── 📄 +not-found.tsx
│   ├── 📄 _layout.tsx
│   ├── 📄 details.tsx
│   ├── 📄 index.tsx
│   └── 📁 invoices/         # Folder for invoice-specific screens
│       ├── 📁 generate/     # Generate invoice-related components/screens
│       │   ├── 📄 _layout.tsx
│       │   └── 📄 index.tsx
├── 📁 assets                 # Static assets like images
│   ├── 🖼️ adaptive-icon.png
│   ├── 🖼️ favicon.png
│   ├── 🖼️ icon.png
│   └── 🖼️ splash.png
├── 📁 store                  # Zustand state management files for app data
│   └── 📄 store.ts
  
```  

---

## **Usage**  

1. **Create an Invoice**  
   - Navigate to the "Create Invoice" screen.  
   - Fill out details like client name, services, and amount.  
   - Save the invoice for later or send it directly to the client.  

2. **Manage Payments**  
   - Connect your Stripe account.  
   - Track payment statuses and send reminders.  

3. **Visual Customization**  
   - Use Tailwind-like classes to update styles effortlessly with NativeWind.  

---

## **Commands**  

### Start the app:  
```bash
expo start
```  

### Lint and format files:  
```bash
npm run lint  
npm run format  
```  

### Build for production:  
```bash
expo build  
```  

---

## **Contributing**  

We welcome contributions! Here's how you can help:  
1. Fork the repository.  
2. Create a new branch (`feature/your-feature`).  
3. Commit your changes.  
4. Open a pull request.  

---

## **License**  
This project is licensed under the MIT License.  

---

## **Contact**  
For questions or feedback, feel free to reach out at:  
📧 Email: ciaranjmcgovern@gmail.com

Happy Coding! 🚀  

---  

Let me know if you'd like additional sections or tweaks! 😊  