//import Link from "next/link";
//to be commented back later for all footer links

export default function Footer() {
  return (
    <footer className=" bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground text-sm">💳logo</span>
              </div>
              <span className="font-semibold">VeriCard</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Verify your card&apos;s South African compatibility before you travel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm">
                Support
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Travel Tips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Card Issues</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Report Bug</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">POPIA Compliance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Security</a></li>
            </ul>
          </div>
        </div>

<hr></hr>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            ©2025 VeriCard.co.za All rights reserved.
          </div>

          {/* Vivid */}
          <div className="py-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-forground mb-4 md:mb-0">
                Designed and Developed by <a href="vividgraphics.co.za">Vivid</a>            
          </div>
          
          {/* Compliance Badges */}
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-2 py-1 rounded">
              <span>🔒</span>
              <span>PCI-DSS</span>
            </div>
            <div className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-2 py-1 rounded">
              <span>🛡️</span>
              <span>POPIA</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}