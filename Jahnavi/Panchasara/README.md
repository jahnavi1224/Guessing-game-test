# Jahnavi_Panchasara Guessing Game Magento 2 Module Installation Guide

## Description
This module provides a guessing game feature where users can guess a randomly generated number.



## Installation Steps

1. **Upload the Module**
   - Copy the module directory (`Jahnavi/Panchasara`) into the following location of your Magento installation:

     app/code/
     app/code/Jahnavi/Panchasara


2. **Enable the Module**
   - Run the following commands in your terminal from the Magento root directory:

     php bin/magento module:enable Jahnavi_Panchasara
     php bin/magento setup:upgrade


3. **Deploy Static Content**
   - If your Magento is in production mode, deploy static content:

     php bin/magento setup:static-content:deploy -f


4. **Clear the Cache**
   - To ensure the module is loaded correctly, clear the cache:
     
     php bin/magento cache:flush


## Usage Instructions

1. **Access the Guessing Game**
   - Open the storefront and navigate to the bottom of the page where the guessing game button is placed

2. **Game Instructions**
   - Click the "Play Guessing Game" button to open the Guessing Game modal.
   - Enter a number between 1 and 50 and press the "Guess" button to play.
   - Follow the inline messages to adjust your guesses.


## Troubleshooting

- **Module Not Displaying:**
  Ensure that the module is enabled:

  php bin/magento module:status


- **If it is disabled, enable it:**
    
  php bin/magento module:enable Jahnavi_Panchasara


- **CSS/JS Not Loading: Deploy the static content again::**
    
  php bin/magento setup:static-content:deploy -f


- **Cache Issues: Clear Magento's cache:**
    
  php bin/magento cache:flush



## Uninstallation

- **Disable the module:**

  php bin/magento module:disable Jahnavi_Panchasara


- **If Remove the module files from code directory:**
    
  Delete Jahnavi/Panchasara folder from app/code


- **Clear Cache:**
    
  php bin/magento cache:flush
