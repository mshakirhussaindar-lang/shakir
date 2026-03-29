 tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#f57224',
            primaryDark: '#d45a0f',
            primaryLight: '#ff8c42',
            secondary: '#232f3e',
            accent: '#ff9f1c',
            success: '#10b981',
            danger: '#ef4444',
            surface: '#ffffff',
            surfaceAlt: '#f8f9fa',
            border: '#e5e7eb',
            textPrimary: '#1f2937',
            textSecondary: '#6b7280'
          }
        }
      }
    }
 

    /* Order Status Badge */
    .status-delivered { background: #dcfce7; color: #166534; }
    .status-processing { background: #fef3c7; color: #92400e; }
    .status-shipped { background: #dbeafe; color: #1e40af; }
    .status-cancelled { background: #fee2e2; color: #991b1b; }

    /* Payment Card Animation */
    .payment-option {
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .payment-option:hover {
      border-color: #f57224;
      background: #fff5eb;
    }

    .payment-option.selected {
      border-color: #f57224;
      background: #fff5eb;
      box-shadow: 0 0 0 3px rgba(245, 114, 36, 0.15);
    }

    /* Banner Animation */
    .banner-content {
      animation: fadeIn 0.8s ease forwards;
    }

    /* Floating Elements */
    .float-animation {
      animation: float 3s ease-in-out infinite;
    }