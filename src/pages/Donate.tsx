import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  CreditCard, 
  Smartphone, 
  QrCode, 
  Shield, 
  Users,
  Home,
  Utensils,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import qrImage from "@/assets/qr-payment.jpg";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const impactItems = [
  { icon: Utensils, amount: 500, description: "Feeds a family for a week" },
  { icon: Home, amount: 2000, description: "Provides emergency shelter" },
  { icon: Users, amount: 5000, description: "Supports a family for a month" },
  { icon: Heart, amount: 10000, description: "Comprehensive relief package" }
];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "qr">("upi");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const finalAmount = selectedAmount || parseInt(customAmount) || 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:bg-white/20 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Donation</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your contribution directly helps flood-affected families in Punjab. Every rupee counts in rebuilding lives and restoring hope.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="h-6 w-6 text-red-500 mr-3" />
                  Choose Your Contribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <Label className="text-lg font-medium mb-4 block">Select Amount</Label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className="h-16 text-lg font-semibold"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        ₹{amount.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                  
                  <div>
                    <Label htmlFor="custom-amount">Or enter custom amount</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount in ₹"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div>
                  <Label className="text-lg font-medium mb-4 block">Payment Method</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      variant={paymentMethod === "upi" ? "default" : "outline"}
                      className="h-20 flex-col"
                      onClick={() => setPaymentMethod("upi")}
                    >
                      <Smartphone className="h-6 w-6 mb-2" />
                      UPI Payment
                    </Button>
                    <Button
                      variant={paymentMethod === "qr" ? "default" : "outline"}
                      className="h-20 flex-col"
                      onClick={() => setPaymentMethod("qr")}
                    >
                      <QrCode className="h-6 w-6 mb-2" />
                      QR Code
                    </Button>
                    <Button
                      variant={paymentMethod === "card" ? "default" : "outline"}
                      className="h-20 flex-col"
                      onClick={() => setPaymentMethod("card")}
                    >
                      <CreditCard className="h-6 w-6 mb-2" />
                      Card Payment
                    </Button>
                  </div>
                </div>

                {/* Donor Information */}
                <div>
                  <Label className="text-lg font-medium mb-4 block">Your Information</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={donorInfo.phone}
                        onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Share why you're supporting our cause..."
                        value={donorInfo.message}
                        onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                        className="mt-1 h-24"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                {paymentMethod === "qr" && (
                  <div className="text-center">
                    <Label className="text-lg font-medium mb-4 block">Scan QR Code to Pay</Label>
                    <div className="max-w-xs mx-auto">
                      <img
                        src={qrImage}
                        alt="UPI QR Code for donations"
                        className="w-full rounded-lg shadow-lg"
                      />
                      <p className="text-sm text-muted-foreground mt-4">
                        UPI ID: punarnirmantrust@upi
                      </p>
                    </div>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div>
                    <Label className="text-lg font-medium mb-4 block">UPI Payment</Label>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">
                          punarnirmantrust@upi
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Use this UPI ID to send your donation
                        </p>
                        <p className="text-lg font-semibold">
                          Amount: ₹{finalAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Donate Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent text-lg font-semibold py-6"
                  disabled={!finalAmount || !donorInfo.name || !donorInfo.email}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Donate ₹{finalAmount.toLocaleString()}
                </Button>

                {/* Security Notice */}
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Your donation is secure and will be used for flood relief efforts</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Sidebar */}
          <div className="space-y-6">
            {/* Impact Calculator */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                {finalAmount > 0 ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">₹{finalAmount.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Your contribution</div>
                    </div>
                    
                    <div className="space-y-3">
                      {impactItems.map((item) => {
                        const quantity = Math.floor(finalAmount / item.amount);
                        if (quantity > 0) {
                          const IconComponent = item.icon;
                          return (
                            <div key={item.amount} className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                              <IconComponent className="h-5 w-5 text-primary" />
                              <div className="flex-1">
                                <div className="font-semibold">{quantity}x</div>
                                <div className="text-sm text-muted-foreground">{item.description}</div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center">
                    Select an amount to see your impact
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  Why Trust Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">100% Transparent</div>
                    <div className="text-sm text-muted-foreground">Track how your donation is used</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Tax Deductible</div>
                    <div className="text-sm text-muted-foreground">80G certificate provided</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Direct Impact</div>
                    <div className="text-sm text-muted-foreground">Funds go directly to relief efforts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Donations */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Recent Supporters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Anonymous</span>
                  <span className="text-primary font-semibold">₹5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Rajesh K.</span>
                  <span className="text-primary font-semibold">₹2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Priya S.</span>
                  <span className="text-primary font-semibold">₹1,000</span>
                </div>
                <div className="text-center text-sm text-muted-foreground mt-4 pt-4 border-t">
                  Join 1,200+ supporters who have donated this month
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;