import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
              Edge Labs – AI Image Detector
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-10 text-balance leading-relaxed">
              Detect whether an image is AI-generated using cutting-edge machine learning techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tool">
                <Button size="lg">Try the Tool</Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg">About Us</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* In-page Navigation */}
      <nav className="sticky top-16 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 py-3">
        <Container>
          <div className="flex gap-6 justify-center overflow-x-auto">
            {['motivation', 'approach', 'methodology'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand transition-colors whitespace-nowrap capitalize focus:outline-none focus:ring-2 focus:ring-brand rounded px-2 py-1"
              >
                {section}
              </button>
            ))}
          </div>
        </Container>
      </nav>

      {/* What We're Building Section */}
      <section id="motivation" className="py-20 scroll-mt-24">
        <Container size="narrow">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            What We're Building
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Motivation
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The proliferation of AI-generated images has created a pressing need for reliable detection methods.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Our approach leverages state-of-the-art deep learning architectures to identify subtle patterns unique to synthetic images.
                  </p>
                </div>
              </div>

              <div id="approach">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Approach (Preview)
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. We employ a multi-stage pipeline combining frequency analysis with neural network classifiers.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This hybrid approach achieves superior accuracy compared to traditional methods.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Why It Matters
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. As generative AI becomes more sophisticated, the ability to distinguish real from synthetic content becomes crucial for maintaining trust in digital media.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="aspect-video flex items-center justify-center">
                  <img
                    src="https://placehold.co/800x450/e5e7eb/6b7280?text=Methodology+Figure"
                    alt="Methodology diagram placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 text-center">
                  Methodology figure (placeholder)
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-gray-50 dark:bg-gray-900/50 scroll-mt-24">
        <Container size="narrow">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Methodology (Placeholder)
          </h2>

          <div className="space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Technical Pipeline
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our detection system processes images through multiple analysis stages, extracting both spatial and frequency-domain features.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The model architecture combines convolutional layers with attention mechanisms to capture fine-grained artifacts.
              </p>
            </div>

            {/* Code Block Placeholder */}
            <div className="bg-gray-900 dark:bg-black rounded-xl p-6 overflow-x-auto border border-gray-700">
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`# Pseudocode for detection pipeline
def detect_ai_image(image):
    # Preprocess and extract features
    features = extract_features(image)

    # Multi-scale analysis
    spatial_features = analyze_spatial(features)
    freq_features = analyze_frequency(features)

    # Classification
    prediction = model.predict([spatial_features, freq_features])

    return prediction

# TODO: Implement full pipeline`}</code>
              </pre>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Training & Validation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. We trained on a diverse dataset comprising both real photographs and images from multiple generative models including Stable Diffusion, DALL-E, and Midjourney.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Callout Cards Section */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <Card title="Accuracy (Placeholder)">
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">•</span>
                  <span>Lorem ipsum dolor sit amet, achieving 94% accuracy on validation set</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">•</span>
                  <span>Consectetur adipiscing elit with robust performance across diverse image types</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">•</span>
                  <span>Sed do eiusmod tempor maintaining high precision and recall metrics</span>
                </li>
              </ul>
            </Card>

            <Card title="Limitations (Placeholder)">
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Incididunt ut labore performance may degrade on heavily compressed images</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Dolore magna aliqua challenges with novel generative models not in training data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Ut enim ad minim requires further validation on edge cases</span>
                </li>
              </ul>
            </Card>

            <Card title="Roadmap (Placeholder)">
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Quis nostrud exercitation expand training dataset with recent AI models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Ullamco laboris implement explainability features for predictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Nisi ut aliquip deploy production API for integration partners</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Test It Out?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Try our AI image detection tool with your own images or explore our sample dataset.
            </p>
            <Link to="/tool">
              <Button size="lg">Jump to the Tool</Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
